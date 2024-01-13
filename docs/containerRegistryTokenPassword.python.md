# `containerRegistryTokenPassword` Submodule <a name="`containerRegistryTokenPassword` Submodule" id="@cdktf/provider-azurerm.containerRegistryTokenPassword"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryTokenPassword <a name="ContainerRegistryTokenPassword" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password azurerm_container_registry_token_password}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_token_password

containerRegistryTokenPassword.ContainerRegistryTokenPassword(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_registry_token_id: str,
  password1: ContainerRegistryTokenPasswordPassword1,
  id: str = None,
  password2: ContainerRegistryTokenPasswordPassword2 = None,
  timeouts: ContainerRegistryTokenPasswordTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.containerRegistryTokenId">container_registry_token_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#container_registry_token_id ContainerRegistryTokenPassword#container_registry_token_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.password1">password1</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a></code> | password1 block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#id ContainerRegistryTokenPassword#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.password2">password2</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a></code> | password2 block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_registry_token_id`<sup>Required</sup> <a name="container_registry_token_id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.containerRegistryTokenId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#container_registry_token_id ContainerRegistryTokenPassword#container_registry_token_id}.

---

##### `password1`<sup>Required</sup> <a name="password1" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.password1"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a>

password1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#password1 ContainerRegistryTokenPassword#password1}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#id ContainerRegistryTokenPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password2`<sup>Optional</sup> <a name="password2" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.password2"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a>

password2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#password2 ContainerRegistryTokenPassword#password2}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#timeouts ContainerRegistryTokenPassword#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword1">put_password1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword2">put_password2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetPassword2">reset_password2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_password1` <a name="put_password1" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword1"></a>

```python
def put_password1(
  expiry: str = None
) -> None
```

###### `expiry`<sup>Optional</sup> <a name="expiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword1.parameter.expiry"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}.

---

##### `put_password2` <a name="put_password2" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword2"></a>

```python
def put_password2(
  expiry: str = None
) -> None
```

###### `expiry`<sup>Optional</sup> <a name="expiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putPassword2.parameter.expiry"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#create ContainerRegistryTokenPassword#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#delete ContainerRegistryTokenPassword#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#read ContainerRegistryTokenPassword#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#update ContainerRegistryTokenPassword#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_password2` <a name="reset_password2" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetPassword2"></a>

```python
def reset_password2() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerRegistryTokenPassword resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_token_password

containerRegistryTokenPassword.ContainerRegistryTokenPassword.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_token_password

containerRegistryTokenPassword.ContainerRegistryTokenPassword.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_token_password

containerRegistryTokenPassword.ContainerRegistryTokenPassword.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_token_password

containerRegistryTokenPassword.ContainerRegistryTokenPassword.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerRegistryTokenPassword resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerRegistryTokenPassword to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerRegistryTokenPassword that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryTokenPassword to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password1">password1</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference">ContainerRegistryTokenPasswordPassword1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password2">password2</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference">ContainerRegistryTokenPasswordPassword2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference">ContainerRegistryTokenPasswordTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.containerRegistryTokenIdInput">container_registry_token_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password1Input">password1_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password2Input">password2_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.containerRegistryTokenId">container_registry_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `password1`<sup>Required</sup> <a name="password1" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password1"></a>

```python
password1: ContainerRegistryTokenPasswordPassword1OutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference">ContainerRegistryTokenPasswordPassword1OutputReference</a>

---

##### `password2`<sup>Required</sup> <a name="password2" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password2"></a>

```python
password2: ContainerRegistryTokenPasswordPassword2OutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference">ContainerRegistryTokenPasswordPassword2OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.timeouts"></a>

```python
timeouts: ContainerRegistryTokenPasswordTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference">ContainerRegistryTokenPasswordTimeoutsOutputReference</a>

---

##### `container_registry_token_id_input`<sup>Optional</sup> <a name="container_registry_token_id_input" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.containerRegistryTokenIdInput"></a>

```python
container_registry_token_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `password1_input`<sup>Optional</sup> <a name="password1_input" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password1Input"></a>

```python
password1_input: ContainerRegistryTokenPasswordPassword1
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a>

---

##### `password2_input`<sup>Optional</sup> <a name="password2_input" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.password2Input"></a>

```python
password2_input: ContainerRegistryTokenPasswordPassword2
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerRegistryTokenPasswordTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a>]

---

##### `container_registry_token_id`<sup>Required</sup> <a name="container_registry_token_id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.containerRegistryTokenId"></a>

```python
container_registry_token_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPassword.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryTokenPasswordConfig <a name="ContainerRegistryTokenPasswordConfig" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_token_password

containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_registry_token_id: str,
  password1: ContainerRegistryTokenPasswordPassword1,
  id: str = None,
  password2: ContainerRegistryTokenPasswordPassword2 = None,
  timeouts: ContainerRegistryTokenPasswordTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.containerRegistryTokenId">container_registry_token_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#container_registry_token_id ContainerRegistryTokenPassword#container_registry_token_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.password1">password1</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a></code> | password1 block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#id ContainerRegistryTokenPassword#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.password2">password2</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a></code> | password2 block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_registry_token_id`<sup>Required</sup> <a name="container_registry_token_id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.containerRegistryTokenId"></a>

```python
container_registry_token_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#container_registry_token_id ContainerRegistryTokenPassword#container_registry_token_id}.

---

##### `password1`<sup>Required</sup> <a name="password1" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.password1"></a>

```python
password1: ContainerRegistryTokenPasswordPassword1
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a>

password1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#password1 ContainerRegistryTokenPassword#password1}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#id ContainerRegistryTokenPassword#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `password2`<sup>Optional</sup> <a name="password2" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.password2"></a>

```python
password2: ContainerRegistryTokenPasswordPassword2
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a>

password2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#password2 ContainerRegistryTokenPassword#password2}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordConfig.property.timeouts"></a>

```python
timeouts: ContainerRegistryTokenPasswordTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#timeouts ContainerRegistryTokenPassword#timeouts}

---

### ContainerRegistryTokenPasswordPassword1 <a name="ContainerRegistryTokenPasswordPassword1" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_token_password

containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1(
  expiry: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1.property.expiry">expiry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}. |

---

##### `expiry`<sup>Optional</sup> <a name="expiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}.

---

### ContainerRegistryTokenPasswordPassword2 <a name="ContainerRegistryTokenPasswordPassword2" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_token_password

containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2(
  expiry: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2.property.expiry">expiry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}. |

---

##### `expiry`<sup>Optional</sup> <a name="expiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#expiry ContainerRegistryTokenPassword#expiry}.

---

### ContainerRegistryTokenPasswordTimeouts <a name="ContainerRegistryTokenPasswordTimeouts" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_token_password

containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#create ContainerRegistryTokenPassword#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#delete ContainerRegistryTokenPassword#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#read ContainerRegistryTokenPassword#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#update ContainerRegistryTokenPassword#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#create ContainerRegistryTokenPassword#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#delete ContainerRegistryTokenPassword#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#read ContainerRegistryTokenPassword#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.87.0/docs/resources/container_registry_token_password#update ContainerRegistryTokenPassword#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryTokenPasswordPassword1OutputReference <a name="ContainerRegistryTokenPasswordPassword1OutputReference" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_token_password

containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resetExpiry">reset_expiry</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiry` <a name="reset_expiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.resetExpiry"></a>

```python
def reset_expiry() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.expiryInput">expiry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.expiry">expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `expiry_input`<sup>Optional</sup> <a name="expiry_input" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.expiryInput"></a>

```python
expiry_input: str
```

- *Type:* str

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1OutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryTokenPasswordPassword1
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword1">ContainerRegistryTokenPasswordPassword1</a>

---


### ContainerRegistryTokenPasswordPassword2OutputReference <a name="ContainerRegistryTokenPasswordPassword2OutputReference" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_token_password

containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resetExpiry">reset_expiry</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiry` <a name="reset_expiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.resetExpiry"></a>

```python
def reset_expiry() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.expiryInput">expiry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.expiry">expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `expiry_input`<sup>Optional</sup> <a name="expiry_input" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.expiryInput"></a>

```python
expiry_input: str
```

- *Type:* str

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2OutputReference.property.internalValue"></a>

```python
internal_value: ContainerRegistryTokenPasswordPassword2
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordPassword2">ContainerRegistryTokenPasswordPassword2</a>

---


### ContainerRegistryTokenPasswordTimeoutsOutputReference <a name="ContainerRegistryTokenPasswordTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_registry_token_password

containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerRegistryTokenPasswordTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerRegistryTokenPassword.ContainerRegistryTokenPasswordTimeouts">ContainerRegistryTokenPasswordTimeouts</a>]

---



