# `azurerm_container_app`

Refer to the Terraform Registory for docs: [`azurerm_container_app`](https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app).

# `containerApp` Submodule <a name="`containerApp` Submodule" id="@cdktf/provider-azurerm.containerApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerApp <a name="ContainerApp" id="@cdktf/provider-azurerm.containerApp.ContainerApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app azurerm_container_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerApp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_app_environment_id: str,
  name: str,
  resource_group_name: str,
  revision_mode: str,
  template: ContainerAppTemplate,
  dapr: ContainerAppDapr = None,
  id: str = None,
  identity: ContainerAppIdentity = None,
  ingress: ContainerAppIngress = None,
  registry: typing.Union[IResolvable, typing.List[ContainerAppRegistry]] = None,
  secret: typing.Union[IResolvable, typing.List[ContainerAppSecret]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ContainerAppTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | The ID of the Container App Environment to host this Container App. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for this Container App. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#resource_group_name ContainerApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.revisionMode">revision_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#revision_mode ContainerApp#revision_mode}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.template">template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.dapr">dapr</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a></code> | dapr block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#id ContainerApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a></code> | ingress block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.registry">registry</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>]]</code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#tags ContainerApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.containerAppEnvironmentId"></a>

- *Type:* str

The ID of the Container App Environment to host this Container App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#container_app_environment_id ContainerApp#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.name"></a>

- *Type:* str

The name for this Container App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#resource_group_name ContainerApp#resource_group_name}.

---

##### `revision_mode`<sup>Required</sup> <a name="revision_mode" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.revisionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#revision_mode ContainerApp#revision_mode}.

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.template"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#template ContainerApp#template}

---

##### `dapr`<sup>Optional</sup> <a name="dapr" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.dapr"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a>

dapr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#dapr ContainerApp#dapr}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#id ContainerApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#identity ContainerApp#identity}

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.ingress"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#ingress ContainerApp#ingress}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.registry"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>]]

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#registry ContainerApp#registry}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.secret"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#secret ContainerApp#secret}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#tags ContainerApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerApp.ContainerApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#timeouts ContainerApp#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putDapr">put_dapr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress">put_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putRegistry">put_registry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putSecret">put_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate">put_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetDapr">reset_dapr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetIngress">reset_ingress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetRegistry">reset_registry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.containerApp.ContainerApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.containerApp.ContainerApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerApp.ContainerApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.containerApp.ContainerApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerApp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerApp.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_dapr` <a name="put_dapr" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putDapr"></a>

```python
def put_dapr(
  app_id: str,
  app_port: typing.Union[int, float] = None,
  app_protocol: str = None
) -> None
```

###### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putDapr.parameter.appId"></a>

- *Type:* str

The Dapr Application Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#app_id ContainerApp#app_id}

---

###### `app_port`<sup>Optional</sup> <a name="app_port" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putDapr.parameter.appPort"></a>

- *Type:* typing.Union[int, float]

The port which the application is listening on. This is the same as the `ingress` port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#app_port ContainerApp#app_port}

---

###### `app_protocol`<sup>Optional</sup> <a name="app_protocol" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putDapr.parameter.appProtocol"></a>

- *Type:* str

The protocol for the app. Possible values include `http` and `grpc`. Defaults to `http`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#app_protocol ContainerApp#app_protocol}

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#type ContainerApp#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#identity_ids ContainerApp#identity_ids}.

---

##### `put_ingress` <a name="put_ingress" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress"></a>

```python
def put_ingress(
  target_port: typing.Union[int, float],
  traffic_weight: typing.Union[IResolvable, typing.List[ContainerAppIngressTrafficWeight]],
  allow_insecure_connections: typing.Union[bool, IResolvable] = None,
  custom_domain: ContainerAppIngressCustomDomain = None,
  exposed_port: typing.Union[int, float] = None,
  external_enabled: typing.Union[bool, IResolvable] = None,
  transport: str = None
) -> None
```

###### `target_port`<sup>Required</sup> <a name="target_port" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress.parameter.targetPort"></a>

- *Type:* typing.Union[int, float]

The target port on the container for the Ingress traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#target_port ContainerApp#target_port}

---

###### `traffic_weight`<sup>Required</sup> <a name="traffic_weight" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress.parameter.trafficWeight"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>]]

traffic_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#traffic_weight ContainerApp#traffic_weight}

---

###### `allow_insecure_connections`<sup>Optional</sup> <a name="allow_insecure_connections" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress.parameter.allowInsecureConnections"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should this ingress allow insecure connections?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#allow_insecure_connections ContainerApp#allow_insecure_connections}

---

###### `custom_domain`<sup>Optional</sup> <a name="custom_domain" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress.parameter.customDomain"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#custom_domain ContainerApp#custom_domain}

---

###### `exposed_port`<sup>Optional</sup> <a name="exposed_port" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress.parameter.exposedPort"></a>

- *Type:* typing.Union[int, float]

The exposed port on the container for the Ingress traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#exposed_port ContainerApp#exposed_port}

---

###### `external_enabled`<sup>Optional</sup> <a name="external_enabled" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress.parameter.externalEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is this an external Ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#external_enabled ContainerApp#external_enabled}

---

###### `transport`<sup>Optional</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putIngress.parameter.transport"></a>

- *Type:* str

The transport method for the Ingress. Possible values include `auto`, `http`, and `http2`, `tcp`. Defaults to `auto`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#transport ContainerApp#transport}

---

##### `put_registry` <a name="put_registry" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putRegistry"></a>

```python
def put_registry(
  value: typing.Union[IResolvable, typing.List[ContainerAppRegistry]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putRegistry.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>]]

---

##### `put_secret` <a name="put_secret" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putSecret"></a>

```python
def put_secret(
  value: typing.Union[IResolvable, typing.List[ContainerAppSecret]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putSecret.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>]]

---

##### `put_template` <a name="put_template" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate"></a>

```python
def put_template(
  container: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainer]],
  azure_queue_scale_rule: typing.Union[IResolvable, typing.List[ContainerAppTemplateAzureQueueScaleRule]] = None,
  custom_scale_rule: typing.Union[IResolvable, typing.List[ContainerAppTemplateCustomScaleRule]] = None,
  http_scale_rule: typing.Union[IResolvable, typing.List[ContainerAppTemplateHttpScaleRule]] = None,
  max_replicas: typing.Union[int, float] = None,
  min_replicas: typing.Union[int, float] = None,
  revision_suffix: str = None,
  tcp_scale_rule: typing.Union[IResolvable, typing.List[ContainerAppTemplateTcpScaleRule]] = None,
  volume: typing.Union[IResolvable, typing.List[ContainerAppTemplateVolume]] = None
) -> None
```

###### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate.parameter.container"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>]]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#container ContainerApp#container}

---

###### `azure_queue_scale_rule`<sup>Optional</sup> <a name="azure_queue_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate.parameter.azureQueueScaleRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>]]

azure_queue_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#azure_queue_scale_rule ContainerApp#azure_queue_scale_rule}

---

###### `custom_scale_rule`<sup>Optional</sup> <a name="custom_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate.parameter.customScaleRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>]]

custom_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#custom_scale_rule ContainerApp#custom_scale_rule}

---

###### `http_scale_rule`<sup>Optional</sup> <a name="http_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate.parameter.httpScaleRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>]]

http_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#http_scale_rule ContainerApp#http_scale_rule}

---

###### `max_replicas`<sup>Optional</sup> <a name="max_replicas" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate.parameter.maxReplicas"></a>

- *Type:* typing.Union[int, float]

The maximum number of replicas for this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#max_replicas ContainerApp#max_replicas}

---

###### `min_replicas`<sup>Optional</sup> <a name="min_replicas" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate.parameter.minReplicas"></a>

- *Type:* typing.Union[int, float]

The minimum number of replicas for this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#min_replicas ContainerApp#min_replicas}

---

###### `revision_suffix`<sup>Optional</sup> <a name="revision_suffix" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate.parameter.revisionSuffix"></a>

- *Type:* str

The suffix for the revision.

This value must be unique for the lifetime of the Resource. If omitted the service will use a hash function to create one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#revision_suffix ContainerApp#revision_suffix}

---

###### `tcp_scale_rule`<sup>Optional</sup> <a name="tcp_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate.parameter.tcpScaleRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>]]

tcp_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#tcp_scale_rule ContainerApp#tcp_scale_rule}

---

###### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTemplate.parameter.volume"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#volume ContainerApp#volume}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#create ContainerApp#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#delete ContainerApp#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#read ContainerApp#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerApp.ContainerApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#update ContainerApp#update}.

---

##### `reset_dapr` <a name="reset_dapr" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetDapr"></a>

```python
def reset_dapr() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_ingress` <a name="reset_ingress" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetIngress"></a>

```python
def reset_ingress() -> None
```

##### `reset_registry` <a name="reset_registry" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetRegistry"></a>

```python
def reset_registry() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.containerApp.ContainerApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerApp resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerApp.ContainerApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.customDomainVerificationId">custom_domain_verification_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.dapr">dapr</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference">ContainerAppDaprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference">ContainerAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference">ContainerAppIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.latestRevisionFqdn">latest_revision_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.latestRevisionName">latest_revision_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.outboundIpAddresses">outbound_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.registry">registry</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList">ContainerAppRegistryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList">ContainerAppSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.template">template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference">ContainerAppTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference">ContainerAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.containerAppEnvironmentIdInput">container_app_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.daprInput">dapr_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.ingressInput">ingress_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.registryInput">registry_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.revisionModeInput">revision_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.secretInput">secret_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.templateInput">template_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.revisionMode">revision_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_domain_verification_id`<sup>Required</sup> <a name="custom_domain_verification_id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.customDomainVerificationId"></a>

```python
custom_domain_verification_id: str
```

- *Type:* str

---

##### `dapr`<sup>Required</sup> <a name="dapr" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.dapr"></a>

```python
dapr: ContainerAppDaprOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference">ContainerAppDaprOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.identity"></a>

```python
identity: ContainerAppIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference">ContainerAppIdentityOutputReference</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.ingress"></a>

```python
ingress: ContainerAppIngressOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference">ContainerAppIngressOutputReference</a>

---

##### `latest_revision_fqdn`<sup>Required</sup> <a name="latest_revision_fqdn" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.latestRevisionFqdn"></a>

```python
latest_revision_fqdn: str
```

- *Type:* str

---

##### `latest_revision_name`<sup>Required</sup> <a name="latest_revision_name" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.latestRevisionName"></a>

```python
latest_revision_name: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `outbound_ip_addresses`<sup>Required</sup> <a name="outbound_ip_addresses" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.outboundIpAddresses"></a>

```python
outbound_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.registry"></a>

```python
registry: ContainerAppRegistryList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList">ContainerAppRegistryList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.secret"></a>

```python
secret: ContainerAppSecretList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList">ContainerAppSecretList</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.template"></a>

```python
template: ContainerAppTemplateOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference">ContainerAppTemplateOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.timeouts"></a>

```python
timeouts: ContainerAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference">ContainerAppTimeoutsOutputReference</a>

---

##### `container_app_environment_id_input`<sup>Optional</sup> <a name="container_app_environment_id_input" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.containerAppEnvironmentIdInput"></a>

```python
container_app_environment_id_input: str
```

- *Type:* str

---

##### `dapr_input`<sup>Optional</sup> <a name="dapr_input" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.daprInput"></a>

```python
dapr_input: ContainerAppDapr
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a>

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.identityInput"></a>

```python
identity_input: ContainerAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_input`<sup>Optional</sup> <a name="ingress_input" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.ingressInput"></a>

```python
ingress_input: ContainerAppIngress
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `registry_input`<sup>Optional</sup> <a name="registry_input" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.registryInput"></a>

```python
registry_input: typing.Union[IResolvable, typing.List[ContainerAppRegistry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>]]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `revision_mode_input`<sup>Optional</sup> <a name="revision_mode_input" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.revisionModeInput"></a>

```python
revision_mode_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.secretInput"></a>

```python
secret_input: typing.Union[IResolvable, typing.List[ContainerAppSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.templateInput"></a>

```python
template_input: ContainerAppTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerAppTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>]

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.containerAppEnvironmentId"></a>

```python
container_app_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `revision_mode`<sup>Required</sup> <a name="revision_mode" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.revisionMode"></a>

```python
revision_mode: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerApp.ContainerApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAppConfig <a name="ContainerAppConfig" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_app_environment_id: str,
  name: str,
  resource_group_name: str,
  revision_mode: str,
  template: ContainerAppTemplate,
  dapr: ContainerAppDapr = None,
  id: str = None,
  identity: ContainerAppIdentity = None,
  ingress: ContainerAppIngress = None,
  registry: typing.Union[IResolvable, typing.List[ContainerAppRegistry]] = None,
  secret: typing.Union[IResolvable, typing.List[ContainerAppSecret]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: ContainerAppTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | The ID of the Container App Environment to host this Container App. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.name">name</a></code> | <code>str</code> | The name for this Container App. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#resource_group_name ContainerApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.revisionMode">revision_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#revision_mode ContainerApp#revision_mode}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.template">template</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a></code> | template block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.dapr">dapr</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a></code> | dapr block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#id ContainerApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a></code> | ingress block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.registry">registry</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>]]</code> | registry block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.secret">secret</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>]]</code> | secret block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#tags ContainerApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.containerAppEnvironmentId"></a>

```python
container_app_environment_id: str
```

- *Type:* str

The ID of the Container App Environment to host this Container App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#container_app_environment_id ContainerApp#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this Container App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#resource_group_name ContainerApp#resource_group_name}.

---

##### `revision_mode`<sup>Required</sup> <a name="revision_mode" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.revisionMode"></a>

```python
revision_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#revision_mode ContainerApp#revision_mode}.

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.template"></a>

```python
template: ContainerAppTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a>

template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#template ContainerApp#template}

---

##### `dapr`<sup>Optional</sup> <a name="dapr" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.dapr"></a>

```python
dapr: ContainerAppDapr
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a>

dapr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#dapr ContainerApp#dapr}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#id ContainerApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.identity"></a>

```python
identity: ContainerAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#identity ContainerApp#identity}

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.ingress"></a>

```python
ingress: ContainerAppIngress
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#ingress ContainerApp#ingress}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.registry"></a>

```python
registry: typing.Union[IResolvable, typing.List[ContainerAppRegistry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>]]

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#registry ContainerApp#registry}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.secret"></a>

```python
secret: typing.Union[IResolvable, typing.List[ContainerAppSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>]]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#secret ContainerApp#secret}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#tags ContainerApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerApp.ContainerAppConfig.property.timeouts"></a>

```python
timeouts: ContainerAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#timeouts ContainerApp#timeouts}

---

### ContainerAppDapr <a name="ContainerAppDapr" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppDapr(
  app_id: str,
  app_port: typing.Union[int, float] = None,
  app_protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appId">app_id</a></code> | <code>str</code> | The Dapr Application Identifier. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appPort">app_port</a></code> | <code>typing.Union[int, float]</code> | The port which the application is listening on. This is the same as the `ingress` port. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appProtocol">app_protocol</a></code> | <code>str</code> | The protocol for the app. Possible values include `http` and `grpc`. Defaults to `http`. |

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appId"></a>

```python
app_id: str
```

- *Type:* str

The Dapr Application Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#app_id ContainerApp#app_id}

---

##### `app_port`<sup>Optional</sup> <a name="app_port" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appPort"></a>

```python
app_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port which the application is listening on. This is the same as the `ingress` port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#app_port ContainerApp#app_port}

---

##### `app_protocol`<sup>Optional</sup> <a name="app_protocol" id="@cdktf/provider-azurerm.containerApp.ContainerAppDapr.property.appProtocol"></a>

```python
app_protocol: str
```

- *Type:* str

The protocol for the app. Possible values include `http` and `grpc`. Defaults to `http`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#app_protocol ContainerApp#app_protocol}

---

### ContainerAppIdentity <a name="ContainerAppIdentity" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#type ContainerApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#identity_ids ContainerApp#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#type ContainerApp#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#identity_ids ContainerApp#identity_ids}.

---

### ContainerAppIngress <a name="ContainerAppIngress" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppIngress(
  target_port: typing.Union[int, float],
  traffic_weight: typing.Union[IResolvable, typing.List[ContainerAppIngressTrafficWeight]],
  allow_insecure_connections: typing.Union[bool, IResolvable] = None,
  custom_domain: ContainerAppIngressCustomDomain = None,
  exposed_port: typing.Union[int, float] = None,
  external_enabled: typing.Union[bool, IResolvable] = None,
  transport: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.targetPort">target_port</a></code> | <code>typing.Union[int, float]</code> | The target port on the container for the Ingress traffic. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.trafficWeight">traffic_weight</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>]]</code> | traffic_weight block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.allowInsecureConnections">allow_insecure_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Should this ingress allow insecure connections? |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.customDomain">custom_domain</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a></code> | custom_domain block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.exposedPort">exposed_port</a></code> | <code>typing.Union[int, float]</code> | The exposed port on the container for the Ingress traffic. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.externalEnabled">external_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Is this an external Ingress. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.transport">transport</a></code> | <code>str</code> | The transport method for the Ingress. Possible values include `auto`, `http`, and `http2`, `tcp`. Defaults to `auto`. |

---

##### `target_port`<sup>Required</sup> <a name="target_port" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.targetPort"></a>

```python
target_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The target port on the container for the Ingress traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#target_port ContainerApp#target_port}

---

##### `traffic_weight`<sup>Required</sup> <a name="traffic_weight" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.trafficWeight"></a>

```python
traffic_weight: typing.Union[IResolvable, typing.List[ContainerAppIngressTrafficWeight]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>]]

traffic_weight block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#traffic_weight ContainerApp#traffic_weight}

---

##### `allow_insecure_connections`<sup>Optional</sup> <a name="allow_insecure_connections" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.allowInsecureConnections"></a>

```python
allow_insecure_connections: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Should this ingress allow insecure connections?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#allow_insecure_connections ContainerApp#allow_insecure_connections}

---

##### `custom_domain`<sup>Optional</sup> <a name="custom_domain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.customDomain"></a>

```python
custom_domain: ContainerAppIngressCustomDomain
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a>

custom_domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#custom_domain ContainerApp#custom_domain}

---

##### `exposed_port`<sup>Optional</sup> <a name="exposed_port" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.exposedPort"></a>

```python
exposed_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The exposed port on the container for the Ingress traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#exposed_port ContainerApp#exposed_port}

---

##### `external_enabled`<sup>Optional</sup> <a name="external_enabled" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.externalEnabled"></a>

```python
external_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Is this an external Ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#external_enabled ContainerApp#external_enabled}

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngress.property.transport"></a>

```python
transport: str
```

- *Type:* str

The transport method for the Ingress. Possible values include `auto`, `http`, and `http2`, `tcp`. Defaults to `auto`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#transport ContainerApp#transport}

---

### ContainerAppIngressCustomDomain <a name="ContainerAppIngressCustomDomain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppIngressCustomDomain(
  certificate_id: str,
  name: str,
  certificate_binding_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.certificateId">certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#certificate_id ContainerApp#certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.name">name</a></code> | <code>str</code> | The hostname of the Certificate. Must be the CN or a named SAN in the certificate. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.certificateBindingType">certificate_binding_type</a></code> | <code>str</code> | The Binding type. Possible values include `Disabled` and `SniEnabled`. Defaults to `Disabled`. |

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#certificate_id ContainerApp#certificate_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.name"></a>

```python
name: str
```

- *Type:* str

The hostname of the Certificate. Must be the CN or a named SAN in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}

---

##### `certificate_binding_type`<sup>Optional</sup> <a name="certificate_binding_type" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain.property.certificateBindingType"></a>

```python
certificate_binding_type: str
```

- *Type:* str

The Binding type. Possible values include `Disabled` and `SniEnabled`. Defaults to `Disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#certificate_binding_type ContainerApp#certificate_binding_type}

---

### ContainerAppIngressTrafficWeight <a name="ContainerAppIngressTrafficWeight" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppIngressTrafficWeight(
  percentage: typing.Union[int, float],
  label: str = None,
  latest_revision: typing.Union[bool, IResolvable] = None,
  revision_suffix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | The percentage of traffic to send to this revision. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.label">label</a></code> | <code>str</code> | The label to apply to the revision as a name prefix for routing traffic. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.latestRevision">latest_revision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This traffic Weight relates to the latest stable Container Revision. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.revisionSuffix">revision_suffix</a></code> | <code>str</code> | The suffix string to append to the revision. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The percentage of traffic to send to this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#percentage ContainerApp#percentage}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.label"></a>

```python
label: str
```

- *Type:* str

The label to apply to the revision as a name prefix for routing traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#label ContainerApp#label}

---

##### `latest_revision`<sup>Optional</sup> <a name="latest_revision" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.latestRevision"></a>

```python
latest_revision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This traffic Weight relates to the latest stable Container Revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#latest_revision ContainerApp#latest_revision}

---

##### `revision_suffix`<sup>Optional</sup> <a name="revision_suffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight.property.revisionSuffix"></a>

```python
revision_suffix: str
```

- *Type:* str

The suffix string to append to the revision.

This must be unique for the Container App's lifetime. A default hash created by the service will be used if this value is omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#revision_suffix ContainerApp#revision_suffix}

---

### ContainerAppRegistry <a name="ContainerAppRegistry" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppRegistry(
  server: str,
  identity: str = None,
  password_secret_name: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.server">server</a></code> | <code>str</code> | The hostname for the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.identity">identity</a></code> | <code>str</code> | ID of the System or User Managed Identity used to pull images from the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.passwordSecretName">password_secret_name</a></code> | <code>str</code> | The name of the Secret Reference containing the password value for this user on the Container Registry. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.username">username</a></code> | <code>str</code> | The username to use for this Container Registry. |

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.server"></a>

```python
server: str
```

- *Type:* str

The hostname for the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#server ContainerApp#server}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.identity"></a>

```python
identity: str
```

- *Type:* str

ID of the System or User Managed Identity used to pull images from the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#identity ContainerApp#identity}

---

##### `password_secret_name`<sup>Optional</sup> <a name="password_secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.passwordSecretName"></a>

```python
password_secret_name: str
```

- *Type:* str

The name of the Secret Reference containing the password value for this user on the Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#password_secret_name ContainerApp#password_secret_name}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistry.property.username"></a>

```python
username: str
```

- *Type:* str

The username to use for this Container Registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#username ContainerApp#username}

---

### ContainerAppSecret <a name="ContainerAppSecret" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecret.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppSecret(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret.property.name">name</a></code> | <code>str</code> | The Secret name. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret.property.value">value</a></code> | <code>str</code> | The value for this secret. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecret.property.name"></a>

```python
name: str
```

- *Type:* str

The Secret name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecret.property.value"></a>

```python
value: str
```

- *Type:* str

The value for this secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplate <a name="ContainerAppTemplate" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplate(
  container: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainer]],
  azure_queue_scale_rule: typing.Union[IResolvable, typing.List[ContainerAppTemplateAzureQueueScaleRule]] = None,
  custom_scale_rule: typing.Union[IResolvable, typing.List[ContainerAppTemplateCustomScaleRule]] = None,
  http_scale_rule: typing.Union[IResolvable, typing.List[ContainerAppTemplateHttpScaleRule]] = None,
  max_replicas: typing.Union[int, float] = None,
  min_replicas: typing.Union[int, float] = None,
  revision_suffix: str = None,
  tcp_scale_rule: typing.Union[IResolvable, typing.List[ContainerAppTemplateTcpScaleRule]] = None,
  volume: typing.Union[IResolvable, typing.List[ContainerAppTemplateVolume]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.container">container</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>]]</code> | container block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.azureQueueScaleRule">azure_queue_scale_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>]]</code> | azure_queue_scale_rule block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.customScaleRule">custom_scale_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>]]</code> | custom_scale_rule block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.httpScaleRule">http_scale_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>]]</code> | http_scale_rule block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.maxReplicas">max_replicas</a></code> | <code>typing.Union[int, float]</code> | The maximum number of replicas for this container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.minReplicas">min_replicas</a></code> | <code>typing.Union[int, float]</code> | The minimum number of replicas for this container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.revisionSuffix">revision_suffix</a></code> | <code>str</code> | The suffix for the revision. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.tcpScaleRule">tcp_scale_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>]]</code> | tcp_scale_rule block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.volume">volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>]]</code> | volume block. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.container"></a>

```python
container: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>]]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#container ContainerApp#container}

---

##### `azure_queue_scale_rule`<sup>Optional</sup> <a name="azure_queue_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.azureQueueScaleRule"></a>

```python
azure_queue_scale_rule: typing.Union[IResolvable, typing.List[ContainerAppTemplateAzureQueueScaleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>]]

azure_queue_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#azure_queue_scale_rule ContainerApp#azure_queue_scale_rule}

---

##### `custom_scale_rule`<sup>Optional</sup> <a name="custom_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.customScaleRule"></a>

```python
custom_scale_rule: typing.Union[IResolvable, typing.List[ContainerAppTemplateCustomScaleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>]]

custom_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#custom_scale_rule ContainerApp#custom_scale_rule}

---

##### `http_scale_rule`<sup>Optional</sup> <a name="http_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.httpScaleRule"></a>

```python
http_scale_rule: typing.Union[IResolvable, typing.List[ContainerAppTemplateHttpScaleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>]]

http_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#http_scale_rule ContainerApp#http_scale_rule}

---

##### `max_replicas`<sup>Optional</sup> <a name="max_replicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.maxReplicas"></a>

```python
max_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of replicas for this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#max_replicas ContainerApp#max_replicas}

---

##### `min_replicas`<sup>Optional</sup> <a name="min_replicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.minReplicas"></a>

```python
min_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of replicas for this container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#min_replicas ContainerApp#min_replicas}

---

##### `revision_suffix`<sup>Optional</sup> <a name="revision_suffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.revisionSuffix"></a>

```python
revision_suffix: str
```

- *Type:* str

The suffix for the revision.

This value must be unique for the lifetime of the Resource. If omitted the service will use a hash function to create one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#revision_suffix ContainerApp#revision_suffix}

---

##### `tcp_scale_rule`<sup>Optional</sup> <a name="tcp_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.tcpScaleRule"></a>

```python
tcp_scale_rule: typing.Union[IResolvable, typing.List[ContainerAppTemplateTcpScaleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>]]

tcp_scale_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#tcp_scale_rule ContainerApp#tcp_scale_rule}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplate.property.volume"></a>

```python
volume: typing.Union[IResolvable, typing.List[ContainerAppTemplateVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#volume ContainerApp#volume}

---

### ContainerAppTemplateAzureQueueScaleRule <a name="ContainerAppTemplateAzureQueueScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateAzureQueueScaleRule(
  authentication: typing.Union[IResolvable, typing.List[ContainerAppTemplateAzureQueueScaleRuleAuthentication]],
  name: str,
  queue_length: typing.Union[int, float],
  queue_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.authentication">authentication</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>]]</code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.queueLength">queue_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#queue_length ContainerApp#queue_length}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.queueName">queue_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#queue_name ContainerApp#queue_name}. |

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.authentication"></a>

```python
authentication: typing.Union[IResolvable, typing.List[ContainerAppTemplateAzureQueueScaleRuleAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>]]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#authentication ContainerApp#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}.

---

##### `queue_length`<sup>Required</sup> <a name="queue_length" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.queueLength"></a>

```python
queue_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#queue_length ContainerApp#queue_length}.

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#queue_name ContainerApp#queue_name}.

---

### ContainerAppTemplateAzureQueueScaleRuleAuthentication <a name="ContainerAppTemplateAzureQueueScaleRuleAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication(
  secret_name: str,
  trigger_parameter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#secret_name ContainerApp#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.property.triggerParameter">trigger_parameter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}. |

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#secret_name ContainerApp#secret_name}.

---

##### `trigger_parameter`<sup>Required</sup> <a name="trigger_parameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication.property.triggerParameter"></a>

```python
trigger_parameter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}.

---

### ContainerAppTemplateContainer <a name="ContainerAppTemplateContainer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainer(
  cpu: typing.Union[int, float],
  image: str,
  memory: str,
  name: str,
  args: typing.List[str] = None,
  command: typing.List[str] = None,
  env: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerEnv]] = None,
  liveness_probe: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerLivenessProbe]] = None,
  readiness_probe: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerReadinessProbe]] = None,
  startup_probe: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerStartupProbe]] = None,
  volume_mounts: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerVolumeMounts]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | The amount of vCPU to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.image">image</a></code> | <code>str</code> | The image to use to create the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.memory">memory</a></code> | <code>str</code> | The amount of memory to allocate to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.name">name</a></code> | <code>str</code> | The name of the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.args">args</a></code> | <code>typing.List[str]</code> | A list of args to pass to the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.command">command</a></code> | <code>typing.List[str]</code> | A command to pass to the container to override the default. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.env">env</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>]]</code> | env block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.livenessProbe">liveness_probe</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>]]</code> | liveness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.readinessProbe">readiness_probe</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>]]</code> | readiness_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.startupProbe">startup_probe</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>]]</code> | startup_probe block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.volumeMounts">volume_mounts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>]]</code> | volume_mounts block. |

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of vCPU to allocate to the container.

Possible values include `0.25`, `0.5`, `0.75`, `1.0`, `1.25`, `1.5`, `1.75`, and `2.0`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.0` / `2.0` or `0.5` / `1.0`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#cpu ContainerApp#cpu}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.image"></a>

```python
image: str
```

- *Type:* str

The image to use to create the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#image ContainerApp#image}

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.memory"></a>

```python
memory: str
```

- *Type:* str

The amount of memory to allocate to the container.

Possible values include `0.5Gi`, `1.0Gi`, `1.5Gi`, `2.0Gi`, `2.5Gi`, `3.0Gi`, `3.5Gi`, and `4.0Gi`. **NOTE:** `cpu` and `memory` must be specified in `0.25'/'0.5Gi` combination increments. e.g. `1.25` / `2.5Gi` or `0.75` / `1.5Gi`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#memory ContainerApp#memory}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

A list of args to pass to the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#args ContainerApp#args}

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

A command to pass to the container to override the default.

This is provided as a list of command line elements without spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#command ContainerApp#command}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.env"></a>

```python
env: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#env ContainerApp#env}

---

##### `liveness_probe`<sup>Optional</sup> <a name="liveness_probe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.livenessProbe"></a>

```python
liveness_probe: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerLivenessProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>]]

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#liveness_probe ContainerApp#liveness_probe}

---

##### `readiness_probe`<sup>Optional</sup> <a name="readiness_probe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.readinessProbe"></a>

```python
readiness_probe: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerReadinessProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>]]

readiness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#readiness_probe ContainerApp#readiness_probe}

---

##### `startup_probe`<sup>Optional</sup> <a name="startup_probe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.startupProbe"></a>

```python
startup_probe: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerStartupProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>]]

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#startup_probe ContainerApp#startup_probe}

---

##### `volume_mounts`<sup>Optional</sup> <a name="volume_mounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer.property.volumeMounts"></a>

```python
volume_mounts: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>]]

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#volume_mounts ContainerApp#volume_mounts}

---

### ContainerAppTemplateContainerEnv <a name="ContainerAppTemplateContainerEnv" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerEnv(
  name: str,
  secret_name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.name">name</a></code> | <code>str</code> | The name of the environment variable for the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.secretName">secret_name</a></code> | <code>str</code> | The name of the secret that contains the value for this environment variable. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.value">value</a></code> | <code>str</code> | The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the environment variable for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}

---

##### `secret_name`<sup>Optional</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

The name of the secret that contains the value for this environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#secret_name ContainerApp#secret_name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv.property.value"></a>

```python
value: str
```

- *Type:* str

The value for this environment variable. **NOTE:** This value is ignored if `secret_name` is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplateContainerLivenessProbe <a name="ContainerAppTemplateContainerLivenessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerLivenessProbe(
  port: typing.Union[int, float],
  transport: str,
  failure_count_threshold: typing.Union[int, float] = None,
  header: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerLivenessProbeHeader]] = None,
  host: str = None,
  initial_delay: typing.Union[int, float] = None,
  interval_seconds: typing.Union[int, float] = None,
  path: str = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.transport">transport</a></code> | <code>str</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.failureCountThreshold">failure_count_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.host">host</a></code> | <code>str</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.initialDelay">initial_delay</a></code> | <code>typing.Union[int, float]</code> | The time in seconds to wait after the container has started before the probe is started. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.path">path</a></code> | <code>str</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#port ContainerApp#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.transport"></a>

```python
transport: str
```

- *Type:* str

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#transport ContainerApp#transport}

---

##### `failure_count_threshold`<sup>Optional</sup> <a name="failure_count_threshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.failureCountThreshold"></a>

```python
failure_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#failure_count_threshold ContainerApp#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerLivenessProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#header ContainerApp#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.host"></a>

```python
host: str
```

- *Type:* str

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#host ContainerApp#host}

---

##### `initial_delay`<sup>Optional</sup> <a name="initial_delay" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.initialDelay"></a>

```python
initial_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time in seconds to wait after the container has started before the probe is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#initial_delay ContainerApp#initial_delay}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#interval_seconds ContainerApp#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.path"></a>

```python
path: str
```

- *Type:* str

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#path ContainerApp#path}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#timeout ContainerApp#timeout}

---

### ContainerAppTemplateContainerLivenessProbeHeader <a name="ContainerAppTemplateContainerLivenessProbeHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerLivenessProbeHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.property.name">name</a></code> | <code>str</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.property.value">value</a></code> | <code>str</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.property.name"></a>

```python
name: str
```

- *Type:* str

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader.property.value"></a>

```python
value: str
```

- *Type:* str

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplateContainerReadinessProbe <a name="ContainerAppTemplateContainerReadinessProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerReadinessProbe(
  port: typing.Union[int, float],
  transport: str,
  failure_count_threshold: typing.Union[int, float] = None,
  header: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerReadinessProbeHeader]] = None,
  host: str = None,
  interval_seconds: typing.Union[int, float] = None,
  path: str = None,
  success_count_threshold: typing.Union[int, float] = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.transport">transport</a></code> | <code>str</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.failureCountThreshold">failure_count_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.host">host</a></code> | <code>str</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.path">path</a></code> | <code>str</code> | The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.successCountThreshold">success_count_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive successful responses required to consider this probe as successful. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#port ContainerApp#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.transport"></a>

```python
transport: str
```

- *Type:* str

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#transport ContainerApp#transport}

---

##### `failure_count_threshold`<sup>Optional</sup> <a name="failure_count_threshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.failureCountThreshold"></a>

```python
failure_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#failure_count_threshold ContainerApp#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerReadinessProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#header ContainerApp#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.host"></a>

```python
host: str
```

- *Type:* str

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#host ContainerApp#host}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#interval_seconds ContainerApp#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.path"></a>

```python
path: str
```

- *Type:* str

The URI to use for http type probes. Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#path ContainerApp#path}

---

##### `success_count_threshold`<sup>Optional</sup> <a name="success_count_threshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.successCountThreshold"></a>

```python
success_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive successful responses required to consider this probe as successful.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#success_count_threshold ContainerApp#success_count_threshold}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#timeout ContainerApp#timeout}

---

### ContainerAppTemplateContainerReadinessProbeHeader <a name="ContainerAppTemplateContainerReadinessProbeHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerReadinessProbeHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.property.name">name</a></code> | <code>str</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.property.value">value</a></code> | <code>str</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.property.name"></a>

```python
name: str
```

- *Type:* str

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader.property.value"></a>

```python
value: str
```

- *Type:* str

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplateContainerStartupProbe <a name="ContainerAppTemplateContainerStartupProbe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerStartupProbe(
  port: typing.Union[int, float],
  transport: str,
  failure_count_threshold: typing.Union[int, float] = None,
  header: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerStartupProbeHeader]] = None,
  host: str = None,
  interval_seconds: typing.Union[int, float] = None,
  path: str = None,
  timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port number on which to connect. Possible values are between `1` and `65535`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.transport">transport</a></code> | <code>str</code> | Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.failureCountThreshold">failure_count_threshold</a></code> | <code>typing.Union[int, float]</code> | The number of consecutive failures required to consider this probe as failed. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.header">header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>]]</code> | header block. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.host">host</a></code> | <code>str</code> | The probe hostname. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.path">path</a></code> | <code>str</code> | The URI to use with the `host` for http type probes. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port number on which to connect. Possible values are between `1` and `65535`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#port ContainerApp#port}

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.transport"></a>

```python
transport: str
```

- *Type:* str

Type of probe. Possible values are `TCP`, `HTTP`, and `HTTPS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#transport ContainerApp#transport}

---

##### `failure_count_threshold`<sup>Optional</sup> <a name="failure_count_threshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.failureCountThreshold"></a>

```python
failure_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of consecutive failures required to consider this probe as failed.

Possible values are between `1` and `10`. Defaults to `3`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#failure_count_threshold ContainerApp#failure_count_threshold}

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.header"></a>

```python
header: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerStartupProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>]]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#header ContainerApp#header}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.host"></a>

```python
host: str
```

- *Type:* str

The probe hostname.

Defaults to the pod IP address. Setting a value for `Host` in `headers` can be used to override this for `http` and `https` type probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#host ContainerApp#host}

---

##### `interval_seconds`<sup>Optional</sup> <a name="interval_seconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often, in seconds, the probe should run. Possible values are between `1` and `240`. Defaults to `10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#interval_seconds ContainerApp#interval_seconds}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.path"></a>

```python
path: str
```

- *Type:* str

The URI to use with the `host` for http type probes.

Not valid for `TCP` type probes. Defaults to `/`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#path ContainerApp#path}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds after which the probe times out. Possible values are between `1` an `240`. Defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#timeout ContainerApp#timeout}

---

### ContainerAppTemplateContainerStartupProbeHeader <a name="ContainerAppTemplateContainerStartupProbeHeader" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerStartupProbeHeader(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.property.name">name</a></code> | <code>str</code> | The HTTP Header Name. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.property.value">value</a></code> | <code>str</code> | The HTTP Header value. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.property.name"></a>

```python
name: str
```

- *Type:* str

The HTTP Header Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader.property.value"></a>

```python
value: str
```

- *Type:* str

The HTTP Header value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#value ContainerApp#value}

---

### ContainerAppTemplateContainerVolumeMounts <a name="ContainerAppTemplateContainerVolumeMounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerVolumeMounts(
  name: str,
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.property.name">name</a></code> | <code>str</code> | The name of the Volume to be mounted in the container. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.property.path">path</a></code> | <code>str</code> | The path in the container at which to mount this volume. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Volume to be mounted in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts.property.path"></a>

```python
path: str
```

- *Type:* str

The path in the container at which to mount this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#path ContainerApp#path}

---

### ContainerAppTemplateCustomScaleRule <a name="ContainerAppTemplateCustomScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateCustomScaleRule(
  custom_rule_type: str,
  metadata: typing.Mapping[str],
  name: str,
  authentication: typing.Union[IResolvable, typing.List[ContainerAppTemplateCustomScaleRuleAuthentication]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.customRuleType">custom_rule_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#custom_rule_type ContainerApp#custom_rule_type}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#metadata ContainerApp#metadata}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.authentication">authentication</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>]]</code> | authentication block. |

---

##### `custom_rule_type`<sup>Required</sup> <a name="custom_rule_type" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.customRuleType"></a>

```python
custom_rule_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#custom_rule_type ContainerApp#custom_rule_type}.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#metadata ContainerApp#metadata}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule.property.authentication"></a>

```python
authentication: typing.Union[IResolvable, typing.List[ContainerAppTemplateCustomScaleRuleAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>]]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#authentication ContainerApp#authentication}

---

### ContainerAppTemplateCustomScaleRuleAuthentication <a name="ContainerAppTemplateCustomScaleRuleAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateCustomScaleRuleAuthentication(
  secret_name: str,
  trigger_parameter: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#secret_name ContainerApp#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.property.triggerParameter">trigger_parameter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}. |

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#secret_name ContainerApp#secret_name}.

---

##### `trigger_parameter`<sup>Required</sup> <a name="trigger_parameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication.property.triggerParameter"></a>

```python
trigger_parameter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}.

---

### ContainerAppTemplateHttpScaleRule <a name="ContainerAppTemplateHttpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateHttpScaleRule(
  concurrent_requests: str,
  name: str,
  authentication: typing.Union[IResolvable, typing.List[ContainerAppTemplateHttpScaleRuleAuthentication]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.concurrentRequests">concurrent_requests</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#concurrent_requests ContainerApp#concurrent_requests}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.authentication">authentication</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>]]</code> | authentication block. |

---

##### `concurrent_requests`<sup>Required</sup> <a name="concurrent_requests" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.concurrentRequests"></a>

```python
concurrent_requests: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#concurrent_requests ContainerApp#concurrent_requests}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule.property.authentication"></a>

```python
authentication: typing.Union[IResolvable, typing.List[ContainerAppTemplateHttpScaleRuleAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>]]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#authentication ContainerApp#authentication}

---

### ContainerAppTemplateHttpScaleRuleAuthentication <a name="ContainerAppTemplateHttpScaleRuleAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateHttpScaleRuleAuthentication(
  secret_name: str,
  trigger_parameter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#secret_name ContainerApp#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.property.triggerParameter">trigger_parameter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}. |

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#secret_name ContainerApp#secret_name}.

---

##### `trigger_parameter`<sup>Optional</sup> <a name="trigger_parameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication.property.triggerParameter"></a>

```python
trigger_parameter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}.

---

### ContainerAppTemplateTcpScaleRule <a name="ContainerAppTemplateTcpScaleRule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateTcpScaleRule(
  concurrent_requests: str,
  name: str,
  authentication: typing.Union[IResolvable, typing.List[ContainerAppTemplateTcpScaleRuleAuthentication]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.concurrentRequests">concurrent_requests</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#concurrent_requests ContainerApp#concurrent_requests}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.authentication">authentication</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>]]</code> | authentication block. |

---

##### `concurrent_requests`<sup>Required</sup> <a name="concurrent_requests" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.concurrentRequests"></a>

```python
concurrent_requests: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#concurrent_requests ContainerApp#concurrent_requests}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule.property.authentication"></a>

```python
authentication: typing.Union[IResolvable, typing.List[ContainerAppTemplateTcpScaleRuleAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>]]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#authentication ContainerApp#authentication}

---

### ContainerAppTemplateTcpScaleRuleAuthentication <a name="ContainerAppTemplateTcpScaleRuleAuthentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateTcpScaleRuleAuthentication(
  secret_name: str,
  trigger_parameter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#secret_name ContainerApp#secret_name}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.property.triggerParameter">trigger_parameter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}. |

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#secret_name ContainerApp#secret_name}.

---

##### `trigger_parameter`<sup>Optional</sup> <a name="trigger_parameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication.property.triggerParameter"></a>

```python
trigger_parameter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#trigger_parameter ContainerApp#trigger_parameter}.

---

### ContainerAppTemplateVolume <a name="ContainerAppTemplateVolume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateVolume(
  name: str,
  storage_name: str = None,
  storage_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.name">name</a></code> | <code>str</code> | The name of the volume. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.storageName">storage_name</a></code> | <code>str</code> | The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.storageType">storage_type</a></code> | <code>str</code> | The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}

---

##### `storage_name`<sup>Optional</sup> <a name="storage_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.storageName"></a>

```python
storage_name: str
```

- *Type:* str

The name of the `AzureFile` storage. Required when `storage_type` is `AzureFile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#storage_name ContainerApp#storage_name}

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

The type of storage volume. Possible values include `AzureFile` and `EmptyDir`. Defaults to `EmptyDir`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#storage_type ContainerApp#storage_type}

---

### ContainerAppTimeouts <a name="ContainerAppTimeouts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#create ContainerApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#delete ContainerApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#read ContainerApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#update ContainerApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#create ContainerApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#delete ContainerApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#read ContainerApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#update ContainerApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAppDaprOutputReference <a name="ContainerAppDaprOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppDaprOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resetAppPort">reset_app_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resetAppProtocol">reset_app_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_port` <a name="reset_app_port" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resetAppPort"></a>

```python
def reset_app_port() -> None
```

##### `reset_app_protocol` <a name="reset_app_protocol" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.resetAppProtocol"></a>

```python
def reset_app_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appPortInput">app_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appProtocolInput">app_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appPort">app_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appProtocol">app_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `app_port_input`<sup>Optional</sup> <a name="app_port_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appPortInput"></a>

```python
app_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `app_protocol_input`<sup>Optional</sup> <a name="app_protocol_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appProtocolInput"></a>

```python
app_protocol_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `app_port`<sup>Required</sup> <a name="app_port" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appPort"></a>

```python
app_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `app_protocol`<sup>Required</sup> <a name="app_protocol" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.appProtocol"></a>

```python
app_protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppDaprOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAppDapr
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppDapr">ContainerAppDapr</a>

---


### ContainerAppIdentityOutputReference <a name="ContainerAppIdentityOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppIdentityOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIdentity">ContainerAppIdentity</a>

---


### ContainerAppIngressCustomDomainOutputReference <a name="ContainerAppIngressCustomDomainOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppIngressCustomDomainOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resetCertificateBindingType">reset_certificate_binding_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_binding_type` <a name="reset_certificate_binding_type" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.resetCertificateBindingType"></a>

```python
def reset_certificate_binding_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateBindingTypeInput">certificate_binding_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateBindingType">certificate_binding_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_binding_type_input`<sup>Optional</sup> <a name="certificate_binding_type_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateBindingTypeInput"></a>

```python
certificate_binding_type_input: str
```

- *Type:* str

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `certificate_binding_type`<sup>Required</sup> <a name="certificate_binding_type" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateBindingType"></a>

```python
certificate_binding_type: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAppIngressCustomDomain
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a>

---


### ContainerAppIngressOutputReference <a name="ContainerAppIngressOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppIngressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putCustomDomain">put_custom_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putTrafficWeight">put_traffic_weight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetAllowInsecureConnections">reset_allow_insecure_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetCustomDomain">reset_custom_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetExposedPort">reset_exposed_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetExternalEnabled">reset_external_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetTransport">reset_transport</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_domain` <a name="put_custom_domain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putCustomDomain"></a>

```python
def put_custom_domain(
  certificate_id: str,
  name: str,
  certificate_binding_type: str = None
) -> None
```

###### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putCustomDomain.parameter.certificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#certificate_id ContainerApp#certificate_id}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putCustomDomain.parameter.name"></a>

- *Type:* str

The hostname of the Certificate. Must be the CN or a named SAN in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#name ContainerApp#name}

---

###### `certificate_binding_type`<sup>Optional</sup> <a name="certificate_binding_type" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putCustomDomain.parameter.certificateBindingType"></a>

- *Type:* str

The Binding type. Possible values include `Disabled` and `SniEnabled`. Defaults to `Disabled`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.79.0/docs/resources/container_app#certificate_binding_type ContainerApp#certificate_binding_type}

---

##### `put_traffic_weight` <a name="put_traffic_weight" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putTrafficWeight"></a>

```python
def put_traffic_weight(
  value: typing.Union[IResolvable, typing.List[ContainerAppIngressTrafficWeight]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.putTrafficWeight.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>]]

---

##### `reset_allow_insecure_connections` <a name="reset_allow_insecure_connections" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetAllowInsecureConnections"></a>

```python
def reset_allow_insecure_connections() -> None
```

##### `reset_custom_domain` <a name="reset_custom_domain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetCustomDomain"></a>

```python
def reset_custom_domain() -> None
```

##### `reset_exposed_port` <a name="reset_exposed_port" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetExposedPort"></a>

```python
def reset_exposed_port() -> None
```

##### `reset_external_enabled` <a name="reset_external_enabled" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetExternalEnabled"></a>

```python
def reset_external_enabled() -> None
```

##### `reset_transport` <a name="reset_transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.resetTransport"></a>

```python
def reset_transport() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.customDomain">custom_domain</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference">ContainerAppIngressCustomDomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.trafficWeight">traffic_weight</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList">ContainerAppIngressTrafficWeightList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.allowInsecureConnectionsInput">allow_insecure_connections_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.customDomainInput">custom_domain_input</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.exposedPortInput">exposed_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.externalEnabledInput">external_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.targetPortInput">target_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.trafficWeightInput">traffic_weight_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.transportInput">transport_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.allowInsecureConnections">allow_insecure_connections</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.exposedPort">exposed_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.externalEnabled">external_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.targetPort">target_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.transport">transport</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_domain`<sup>Required</sup> <a name="custom_domain" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.customDomain"></a>

```python
custom_domain: ContainerAppIngressCustomDomainOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomainOutputReference">ContainerAppIngressCustomDomainOutputReference</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `traffic_weight`<sup>Required</sup> <a name="traffic_weight" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.trafficWeight"></a>

```python
traffic_weight: ContainerAppIngressTrafficWeightList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList">ContainerAppIngressTrafficWeightList</a>

---

##### `allow_insecure_connections_input`<sup>Optional</sup> <a name="allow_insecure_connections_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.allowInsecureConnectionsInput"></a>

```python
allow_insecure_connections_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `custom_domain_input`<sup>Optional</sup> <a name="custom_domain_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.customDomainInput"></a>

```python
custom_domain_input: ContainerAppIngressCustomDomain
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressCustomDomain">ContainerAppIngressCustomDomain</a>

---

##### `exposed_port_input`<sup>Optional</sup> <a name="exposed_port_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.exposedPortInput"></a>

```python
exposed_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_enabled_input`<sup>Optional</sup> <a name="external_enabled_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.externalEnabledInput"></a>

```python
external_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_port_input`<sup>Optional</sup> <a name="target_port_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.targetPortInput"></a>

```python
target_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `traffic_weight_input`<sup>Optional</sup> <a name="traffic_weight_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.trafficWeightInput"></a>

```python
traffic_weight_input: typing.Union[IResolvable, typing.List[ContainerAppIngressTrafficWeight]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>]]

---

##### `transport_input`<sup>Optional</sup> <a name="transport_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.transportInput"></a>

```python
transport_input: str
```

- *Type:* str

---

##### `allow_insecure_connections`<sup>Required</sup> <a name="allow_insecure_connections" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.allowInsecureConnections"></a>

```python
allow_insecure_connections: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `exposed_port`<sup>Required</sup> <a name="exposed_port" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.exposedPort"></a>

```python
exposed_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_enabled`<sup>Required</sup> <a name="external_enabled" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.externalEnabled"></a>

```python
external_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_port`<sup>Required</sup> <a name="target_port" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.targetPort"></a>

```python
target_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.transport"></a>

```python
transport: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAppIngress
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngress">ContainerAppIngress</a>

---


### ContainerAppIngressTrafficWeightList <a name="ContainerAppIngressTrafficWeightList" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppIngressTrafficWeightList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppIngressTrafficWeightOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppIngressTrafficWeight]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>]]

---


### ContainerAppIngressTrafficWeightOutputReference <a name="ContainerAppIngressTrafficWeightOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppIngressTrafficWeightOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetLatestRevision">reset_latest_revision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetRevisionSuffix">reset_revision_suffix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_label` <a name="reset_label" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_latest_revision` <a name="reset_latest_revision" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetLatestRevision"></a>

```python
def reset_latest_revision() -> None
```

##### `reset_revision_suffix` <a name="reset_revision_suffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.resetRevisionSuffix"></a>

```python
def reset_revision_suffix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.latestRevisionInput">latest_revision_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.percentageInput">percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.revisionSuffixInput">revision_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.latestRevision">latest_revision</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.revisionSuffix">revision_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `latest_revision_input`<sup>Optional</sup> <a name="latest_revision_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.latestRevisionInput"></a>

```python
latest_revision_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `percentage_input`<sup>Optional</sup> <a name="percentage_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.percentageInput"></a>

```python
percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision_suffix_input`<sup>Optional</sup> <a name="revision_suffix_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.revisionSuffixInput"></a>

```python
revision_suffix_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `latest_revision`<sup>Required</sup> <a name="latest_revision" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.latestRevision"></a>

```python
latest_revision: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision_suffix`<sup>Required</sup> <a name="revision_suffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.revisionSuffix"></a>

```python
revision_suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeightOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppIngressTrafficWeight]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppIngressTrafficWeight">ContainerAppIngressTrafficWeight</a>]

---


### ContainerAppRegistryList <a name="ContainerAppRegistryList" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppRegistryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppRegistryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppRegistry]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>]]

---


### ContainerAppRegistryOutputReference <a name="ContainerAppRegistryOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppRegistryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetPasswordSecretName">reset_password_secret_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_password_secret_name` <a name="reset_password_secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetPasswordSecretName"></a>

```python
def reset_password_secret_name() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.identityInput">identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.passwordSecretNameInput">password_secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.serverInput">server_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.passwordSecretName">password_secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.server">server</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.identityInput"></a>

```python
identity_input: str
```

- *Type:* str

---

##### `password_secret_name_input`<sup>Optional</sup> <a name="password_secret_name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.passwordSecretNameInput"></a>

```python
password_secret_name_input: str
```

- *Type:* str

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.serverInput"></a>

```python
server_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `password_secret_name`<sup>Required</sup> <a name="password_secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.passwordSecretName"></a>

```python
password_secret_name: str
```

- *Type:* str

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.server"></a>

```python
server: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppRegistryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppRegistry]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppRegistry">ContainerAppRegistry</a>]

---


### ContainerAppSecretList <a name="ContainerAppSecretList" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppSecretList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppSecret]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>]]

---


### ContainerAppSecretOutputReference <a name="ContainerAppSecretOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppSecretOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppSecretOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppSecret]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppSecret">ContainerAppSecret</a>]

---


### ContainerAppTemplateAzureQueueScaleRuleAuthenticationList <a name="ContainerAppTemplateAzureQueueScaleRuleAuthenticationList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateAzureQueueScaleRuleAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>]]

---


### ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference <a name="ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.triggerParameterInput">trigger_parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.triggerParameter">trigger_parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `trigger_parameter_input`<sup>Optional</sup> <a name="trigger_parameter_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.triggerParameterInput"></a>

```python
trigger_parameter_input: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `trigger_parameter`<sup>Required</sup> <a name="trigger_parameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.triggerParameter"></a>

```python
trigger_parameter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateAzureQueueScaleRuleAuthentication]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>]

---


### ContainerAppTemplateAzureQueueScaleRuleList <a name="ContainerAppTemplateAzureQueueScaleRuleList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateAzureQueueScaleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateAzureQueueScaleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateAzureQueueScaleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>]]

---


### ContainerAppTemplateAzureQueueScaleRuleOutputReference <a name="ContainerAppTemplateAzureQueueScaleRuleOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.putAuthentication">put_authentication</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication` <a name="put_authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.putAuthentication"></a>

```python
def put_authentication(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateAzureQueueScaleRuleAuthentication]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.putAuthentication.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList">ContainerAppTemplateAzureQueueScaleRuleAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.authenticationInput">authentication_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueLengthInput">queue_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueNameInput">queue_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueLength">queue_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueName">queue_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.authentication"></a>

```python
authentication: ContainerAppTemplateAzureQueueScaleRuleAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthenticationList">ContainerAppTemplateAzureQueueScaleRuleAuthenticationList</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.authenticationInput"></a>

```python
authentication_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateAzureQueueScaleRuleAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleAuthentication">ContainerAppTemplateAzureQueueScaleRuleAuthentication</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `queue_length_input`<sup>Optional</sup> <a name="queue_length_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueLengthInput"></a>

```python
queue_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue_name_input`<sup>Optional</sup> <a name="queue_name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueNameInput"></a>

```python
queue_name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `queue_length`<sup>Required</sup> <a name="queue_length" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueLength"></a>

```python
queue_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queue_name`<sup>Required</sup> <a name="queue_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.queueName"></a>

```python
queue_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateAzureQueueScaleRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>]

---


### ContainerAppTemplateContainerEnvList <a name="ContainerAppTemplateContainerEnvList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateContainerEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>]]

---


### ContainerAppTemplateContainerEnvOutputReference <a name="ContainerAppTemplateContainerEnvOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resetSecretName">reset_secret_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secret_name` <a name="reset_secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resetSecretName"></a>

```python
def reset_secret_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateContainerEnv]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>]

---


### ContainerAppTemplateContainerList <a name="ContainerAppTemplateContainerList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>]]

---


### ContainerAppTemplateContainerLivenessProbeHeaderList <a name="ContainerAppTemplateContainerLivenessProbeHeaderList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateContainerLivenessProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerLivenessProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>]]

---


### ContainerAppTemplateContainerLivenessProbeHeaderOutputReference <a name="ContainerAppTemplateContainerLivenessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateContainerLivenessProbeHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>]

---


### ContainerAppTemplateContainerLivenessProbeList <a name="ContainerAppTemplateContainerLivenessProbeList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerLivenessProbeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateContainerLivenessProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerLivenessProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>]]

---


### ContainerAppTemplateContainerLivenessProbeOutputReference <a name="ContainerAppTemplateContainerLivenessProbeOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetFailureCountThreshold">reset_failure_count_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetInitialDelay">reset_initial_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerLivenessProbeHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>]]

---

##### `reset_failure_count_threshold` <a name="reset_failure_count_threshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetFailureCountThreshold"></a>

```python
def reset_failure_count_threshold() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_initial_delay` <a name="reset_initial_delay" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetInitialDelay"></a>

```python
def reset_initial_delay() -> None
```

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList">ContainerAppTemplateContainerLivenessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds">termination_grace_period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput">failure_count_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.initialDelayInput">initial_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.transportInput">transport_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold">failure_count_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.initialDelay">initial_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.transport">transport</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.header"></a>

```python
header: ContainerAppTemplateContainerLivenessProbeHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeaderList">ContainerAppTemplateContainerLivenessProbeHeaderList</a>

---

##### `termination_grace_period_seconds`<sup>Required</sup> <a name="termination_grace_period_seconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```python
termination_grace_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_count_threshold_input`<sup>Optional</sup> <a name="failure_count_threshold_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.failureCountThresholdInput"></a>

```python
failure_count_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerLivenessProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeHeader">ContainerAppTemplateContainerLivenessProbeHeader</a>]]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `initial_delay_input`<sup>Optional</sup> <a name="initial_delay_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.initialDelayInput"></a>

```python
initial_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport_input`<sup>Optional</sup> <a name="transport_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.transportInput"></a>

```python
transport_input: str
```

- *Type:* str

---

##### `failure_count_threshold`<sup>Required</sup> <a name="failure_count_threshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.failureCountThreshold"></a>

```python
failure_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `initial_delay`<sup>Required</sup> <a name="initial_delay" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.initialDelay"></a>

```python
initial_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.transport"></a>

```python
transport: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateContainerLivenessProbe]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>]

---


### ContainerAppTemplateContainerOutputReference <a name="ContainerAppTemplateContainerOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putLivenessProbe">put_liveness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putReadinessProbe">put_readiness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putStartupProbe">put_startup_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putVolumeMounts">put_volume_mounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetArgs">reset_args</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetLivenessProbe">reset_liveness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetReadinessProbe">reset_readiness_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetStartupProbe">reset_startup_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetVolumeMounts">reset_volume_mounts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putEnv"></a>

```python
def put_env(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerEnv]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putEnv.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>]]

---

##### `put_liveness_probe` <a name="put_liveness_probe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putLivenessProbe"></a>

```python
def put_liveness_probe(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerLivenessProbe]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>]]

---

##### `put_readiness_probe` <a name="put_readiness_probe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putReadinessProbe"></a>

```python
def put_readiness_probe(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerReadinessProbe]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putReadinessProbe.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>]]

---

##### `put_startup_probe` <a name="put_startup_probe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putStartupProbe"></a>

```python
def put_startup_probe(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerStartupProbe]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>]]

---

##### `put_volume_mounts` <a name="put_volume_mounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putVolumeMounts"></a>

```python
def put_volume_mounts(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerVolumeMounts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>]]

---

##### `reset_args` <a name="reset_args" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```

##### `reset_command` <a name="reset_command" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_env` <a name="reset_env" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_liveness_probe` <a name="reset_liveness_probe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetLivenessProbe"></a>

```python
def reset_liveness_probe() -> None
```

##### `reset_readiness_probe` <a name="reset_readiness_probe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetReadinessProbe"></a>

```python
def reset_readiness_probe() -> None
```

##### `reset_startup_probe` <a name="reset_startup_probe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetStartupProbe"></a>

```python
def reset_startup_probe() -> None
```

##### `reset_volume_mounts` <a name="reset_volume_mounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.resetVolumeMounts"></a>

```python
def reset_volume_mounts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList">ContainerAppTemplateContainerEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.ephemeralStorage">ephemeral_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.livenessProbe">liveness_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList">ContainerAppTemplateContainerLivenessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.readinessProbe">readiness_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList">ContainerAppTemplateContainerReadinessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.startupProbe">startup_probe</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList">ContainerAppTemplateContainerStartupProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.volumeMounts">volume_mounts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList">ContainerAppTemplateContainerVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.cpuInput">cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.envInput">env_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.livenessProbeInput">liveness_probe_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.memoryInput">memory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.readinessProbeInput">readiness_probe_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.startupProbeInput">startup_probe_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.volumeMountsInput">volume_mounts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.cpu">cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.memory">memory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.env"></a>

```python
env: ContainerAppTemplateContainerEnvList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnvList">ContainerAppTemplateContainerEnvList</a>

---

##### `ephemeral_storage`<sup>Required</sup> <a name="ephemeral_storage" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.ephemeralStorage"></a>

```python
ephemeral_storage: str
```

- *Type:* str

---

##### `liveness_probe`<sup>Required</sup> <a name="liveness_probe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.livenessProbe"></a>

```python
liveness_probe: ContainerAppTemplateContainerLivenessProbeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbeList">ContainerAppTemplateContainerLivenessProbeList</a>

---

##### `readiness_probe`<sup>Required</sup> <a name="readiness_probe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.readinessProbe"></a>

```python
readiness_probe: ContainerAppTemplateContainerReadinessProbeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList">ContainerAppTemplateContainerReadinessProbeList</a>

---

##### `startup_probe`<sup>Required</sup> <a name="startup_probe" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.startupProbe"></a>

```python
startup_probe: ContainerAppTemplateContainerStartupProbeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList">ContainerAppTemplateContainerStartupProbeList</a>

---

##### `volume_mounts`<sup>Required</sup> <a name="volume_mounts" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.volumeMounts"></a>

```python
volume_mounts: ContainerAppTemplateContainerVolumeMountsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList">ContainerAppTemplateContainerVolumeMountsList</a>

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_input`<sup>Optional</sup> <a name="cpu_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.cpuInput"></a>

```python
cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.envInput"></a>

```python
env_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerEnv">ContainerAppTemplateContainerEnv</a>]]

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `liveness_probe_input`<sup>Optional</sup> <a name="liveness_probe_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.livenessProbeInput"></a>

```python
liveness_probe_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerLivenessProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerLivenessProbe">ContainerAppTemplateContainerLivenessProbe</a>]]

---

##### `memory_input`<sup>Optional</sup> <a name="memory_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.memoryInput"></a>

```python
memory_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `readiness_probe_input`<sup>Optional</sup> <a name="readiness_probe_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.readinessProbeInput"></a>

```python
readiness_probe_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerReadinessProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>]]

---

##### `startup_probe_input`<sup>Optional</sup> <a name="startup_probe_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.startupProbeInput"></a>

```python
startup_probe_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerStartupProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>]]

---

##### `volume_mounts_input`<sup>Optional</sup> <a name="volume_mounts_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.volumeMountsInput"></a>

```python
volume_mounts_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>]]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.cpu"></a>

```python
cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.memory"></a>

```python
memory: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateContainer]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>]

---


### ContainerAppTemplateContainerReadinessProbeHeaderList <a name="ContainerAppTemplateContainerReadinessProbeHeaderList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateContainerReadinessProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerReadinessProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>]]

---


### ContainerAppTemplateContainerReadinessProbeHeaderOutputReference <a name="ContainerAppTemplateContainerReadinessProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateContainerReadinessProbeHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>]

---


### ContainerAppTemplateContainerReadinessProbeList <a name="ContainerAppTemplateContainerReadinessProbeList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerReadinessProbeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateContainerReadinessProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerReadinessProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>]]

---


### ContainerAppTemplateContainerReadinessProbeOutputReference <a name="ContainerAppTemplateContainerReadinessProbeOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetFailureCountThreshold">reset_failure_count_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetSuccessCountThreshold">reset_success_count_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerReadinessProbeHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>]]

---

##### `reset_failure_count_threshold` <a name="reset_failure_count_threshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetFailureCountThreshold"></a>

```python
def reset_failure_count_threshold() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_success_count_threshold` <a name="reset_success_count_threshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetSuccessCountThreshold"></a>

```python
def reset_success_count_threshold() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList">ContainerAppTemplateContainerReadinessProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput">failure_count_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput">success_count_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.transportInput">transport_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold">failure_count_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.successCountThreshold">success_count_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.transport">transport</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.header"></a>

```python
header: ContainerAppTemplateContainerReadinessProbeHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeaderList">ContainerAppTemplateContainerReadinessProbeHeaderList</a>

---

##### `failure_count_threshold_input`<sup>Optional</sup> <a name="failure_count_threshold_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.failureCountThresholdInput"></a>

```python
failure_count_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerReadinessProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeHeader">ContainerAppTemplateContainerReadinessProbeHeader</a>]]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_count_threshold_input`<sup>Optional</sup> <a name="success_count_threshold_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.successCountThresholdInput"></a>

```python
success_count_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport_input`<sup>Optional</sup> <a name="transport_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.transportInput"></a>

```python
transport_input: str
```

- *Type:* str

---

##### `failure_count_threshold`<sup>Required</sup> <a name="failure_count_threshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.failureCountThreshold"></a>

```python
failure_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `success_count_threshold`<sup>Required</sup> <a name="success_count_threshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.successCountThreshold"></a>

```python
success_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.transport"></a>

```python
transport: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateContainerReadinessProbe]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerReadinessProbe">ContainerAppTemplateContainerReadinessProbe</a>]

---


### ContainerAppTemplateContainerStartupProbeHeaderList <a name="ContainerAppTemplateContainerStartupProbeHeaderList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerStartupProbeHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateContainerStartupProbeHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerStartupProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>]]

---


### ContainerAppTemplateContainerStartupProbeHeaderOutputReference <a name="ContainerAppTemplateContainerStartupProbeHeaderOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateContainerStartupProbeHeader]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>]

---


### ContainerAppTemplateContainerStartupProbeList <a name="ContainerAppTemplateContainerStartupProbeList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerStartupProbeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateContainerStartupProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerStartupProbe]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>]]

---


### ContainerAppTemplateContainerStartupProbeOutputReference <a name="ContainerAppTemplateContainerStartupProbeOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerStartupProbeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.putHeader">put_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetFailureCountThreshold">reset_failure_count_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetHeader">reset_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetIntervalSeconds">reset_interval_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_header` <a name="put_header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.putHeader"></a>

```python
def put_header(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerStartupProbeHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.putHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>]]

---

##### `reset_failure_count_threshold` <a name="reset_failure_count_threshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetFailureCountThreshold"></a>

```python
def reset_failure_count_threshold() -> None
```

##### `reset_header` <a name="reset_header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetHeader"></a>

```python
def reset_header() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_interval_seconds` <a name="reset_interval_seconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetIntervalSeconds"></a>

```python
def reset_interval_seconds() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList">ContainerAppTemplateContainerStartupProbeHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds">termination_grace_period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput">failure_count_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.headerInput">header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput">interval_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.transportInput">transport_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.failureCountThreshold">failure_count_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.intervalSeconds">interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.transport">transport</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.header"></a>

```python
header: ContainerAppTemplateContainerStartupProbeHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeaderList">ContainerAppTemplateContainerStartupProbeHeaderList</a>

---

##### `termination_grace_period_seconds`<sup>Required</sup> <a name="termination_grace_period_seconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.terminationGracePeriodSeconds"></a>

```python
termination_grace_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_count_threshold_input`<sup>Optional</sup> <a name="failure_count_threshold_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.failureCountThresholdInput"></a>

```python
failure_count_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `header_input`<sup>Optional</sup> <a name="header_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.headerInput"></a>

```python
header_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerStartupProbeHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeHeader">ContainerAppTemplateContainerStartupProbeHeader</a>]]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `interval_seconds_input`<sup>Optional</sup> <a name="interval_seconds_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.intervalSecondsInput"></a>

```python
interval_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport_input`<sup>Optional</sup> <a name="transport_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.transportInput"></a>

```python
transport_input: str
```

- *Type:* str

---

##### `failure_count_threshold`<sup>Required</sup> <a name="failure_count_threshold" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.failureCountThreshold"></a>

```python
failure_count_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `interval_seconds`<sup>Required</sup> <a name="interval_seconds" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.intervalSeconds"></a>

```python
interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.transport"></a>

```python
transport: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateContainerStartupProbe]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerStartupProbe">ContainerAppTemplateContainerStartupProbe</a>]

---


### ContainerAppTemplateContainerVolumeMountsList <a name="ContainerAppTemplateContainerVolumeMountsList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerVolumeMountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateContainerVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainerVolumeMounts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>]]

---


### ContainerAppTemplateContainerVolumeMountsOutputReference <a name="ContainerAppTemplateContainerVolumeMountsOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMountsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateContainerVolumeMounts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerVolumeMounts">ContainerAppTemplateContainerVolumeMounts</a>]

---


### ContainerAppTemplateCustomScaleRuleAuthenticationList <a name="ContainerAppTemplateCustomScaleRuleAuthenticationList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateCustomScaleRuleAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>]]

---


### ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference <a name="ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.triggerParameterInput">trigger_parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.triggerParameter">trigger_parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `trigger_parameter_input`<sup>Optional</sup> <a name="trigger_parameter_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.triggerParameterInput"></a>

```python
trigger_parameter_input: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `trigger_parameter`<sup>Required</sup> <a name="trigger_parameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.triggerParameter"></a>

```python
trigger_parameter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateCustomScaleRuleAuthentication]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>]

---


### ContainerAppTemplateCustomScaleRuleList <a name="ContainerAppTemplateCustomScaleRuleList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateCustomScaleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateCustomScaleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateCustomScaleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>]]

---


### ContainerAppTemplateCustomScaleRuleOutputReference <a name="ContainerAppTemplateCustomScaleRuleOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateCustomScaleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resetAuthentication">reset_authentication</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication` <a name="put_authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.putAuthentication"></a>

```python
def put_authentication(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateCustomScaleRuleAuthentication]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.putAuthentication.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>]]

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.resetAuthentication"></a>

```python
def reset_authentication() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList">ContainerAppTemplateCustomScaleRuleAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.authenticationInput">authentication_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.customRuleTypeInput">custom_rule_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.customRuleType">custom_rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.authentication"></a>

```python
authentication: ContainerAppTemplateCustomScaleRuleAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthenticationList">ContainerAppTemplateCustomScaleRuleAuthenticationList</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.authenticationInput"></a>

```python
authentication_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateCustomScaleRuleAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleAuthentication">ContainerAppTemplateCustomScaleRuleAuthentication</a>]]

---

##### `custom_rule_type_input`<sup>Optional</sup> <a name="custom_rule_type_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.customRuleTypeInput"></a>

```python
custom_rule_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `custom_rule_type`<sup>Required</sup> <a name="custom_rule_type" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.customRuleType"></a>

```python
custom_rule_type: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateCustomScaleRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>]

---


### ContainerAppTemplateHttpScaleRuleAuthenticationList <a name="ContainerAppTemplateHttpScaleRuleAuthenticationList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateHttpScaleRuleAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>]]

---


### ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference <a name="ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resetTriggerParameter">reset_trigger_parameter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_trigger_parameter` <a name="reset_trigger_parameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.resetTriggerParameter"></a>

```python
def reset_trigger_parameter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.triggerParameterInput">trigger_parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.triggerParameter">trigger_parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `trigger_parameter_input`<sup>Optional</sup> <a name="trigger_parameter_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.triggerParameterInput"></a>

```python
trigger_parameter_input: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `trigger_parameter`<sup>Required</sup> <a name="trigger_parameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.triggerParameter"></a>

```python
trigger_parameter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateHttpScaleRuleAuthentication]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>]

---


### ContainerAppTemplateHttpScaleRuleList <a name="ContainerAppTemplateHttpScaleRuleList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateHttpScaleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateHttpScaleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateHttpScaleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>]]

---


### ContainerAppTemplateHttpScaleRuleOutputReference <a name="ContainerAppTemplateHttpScaleRuleOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateHttpScaleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resetAuthentication">reset_authentication</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication` <a name="put_authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.putAuthentication"></a>

```python
def put_authentication(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateHttpScaleRuleAuthentication]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.putAuthentication.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>]]

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.resetAuthentication"></a>

```python
def reset_authentication() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList">ContainerAppTemplateHttpScaleRuleAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.authenticationInput">authentication_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.concurrentRequestsInput">concurrent_requests_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.concurrentRequests">concurrent_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.authentication"></a>

```python
authentication: ContainerAppTemplateHttpScaleRuleAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthenticationList">ContainerAppTemplateHttpScaleRuleAuthenticationList</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.authenticationInput"></a>

```python
authentication_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateHttpScaleRuleAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleAuthentication">ContainerAppTemplateHttpScaleRuleAuthentication</a>]]

---

##### `concurrent_requests_input`<sup>Optional</sup> <a name="concurrent_requests_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.concurrentRequestsInput"></a>

```python
concurrent_requests_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `concurrent_requests`<sup>Required</sup> <a name="concurrent_requests" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.concurrentRequests"></a>

```python
concurrent_requests: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateHttpScaleRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>]

---


### ContainerAppTemplateOutputReference <a name="ContainerAppTemplateOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putAzureQueueScaleRule">put_azure_queue_scale_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putContainer">put_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putCustomScaleRule">put_custom_scale_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putHttpScaleRule">put_http_scale_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putTcpScaleRule">put_tcp_scale_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetAzureQueueScaleRule">reset_azure_queue_scale_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetCustomScaleRule">reset_custom_scale_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetHttpScaleRule">reset_http_scale_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetMaxReplicas">reset_max_replicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetMinReplicas">reset_min_replicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetRevisionSuffix">reset_revision_suffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetTcpScaleRule">reset_tcp_scale_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetVolume">reset_volume</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure_queue_scale_rule` <a name="put_azure_queue_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putAzureQueueScaleRule"></a>

```python
def put_azure_queue_scale_rule(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateAzureQueueScaleRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putAzureQueueScaleRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>]]

---

##### `put_container` <a name="put_container" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putContainer"></a>

```python
def put_container(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putContainer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>]]

---

##### `put_custom_scale_rule` <a name="put_custom_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putCustomScaleRule"></a>

```python
def put_custom_scale_rule(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateCustomScaleRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putCustomScaleRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>]]

---

##### `put_http_scale_rule` <a name="put_http_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putHttpScaleRule"></a>

```python
def put_http_scale_rule(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateHttpScaleRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putHttpScaleRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>]]

---

##### `put_tcp_scale_rule` <a name="put_tcp_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putTcpScaleRule"></a>

```python
def put_tcp_scale_rule(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateTcpScaleRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putTcpScaleRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>]]

---

##### `put_volume` <a name="put_volume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putVolume"></a>

```python
def put_volume(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateVolume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.putVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>]]

---

##### `reset_azure_queue_scale_rule` <a name="reset_azure_queue_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetAzureQueueScaleRule"></a>

```python
def reset_azure_queue_scale_rule() -> None
```

##### `reset_custom_scale_rule` <a name="reset_custom_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetCustomScaleRule"></a>

```python
def reset_custom_scale_rule() -> None
```

##### `reset_http_scale_rule` <a name="reset_http_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetHttpScaleRule"></a>

```python
def reset_http_scale_rule() -> None
```

##### `reset_max_replicas` <a name="reset_max_replicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetMaxReplicas"></a>

```python
def reset_max_replicas() -> None
```

##### `reset_min_replicas` <a name="reset_min_replicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetMinReplicas"></a>

```python
def reset_min_replicas() -> None
```

##### `reset_revision_suffix` <a name="reset_revision_suffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetRevisionSuffix"></a>

```python
def reset_revision_suffix() -> None
```

##### `reset_tcp_scale_rule` <a name="reset_tcp_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetTcpScaleRule"></a>

```python
def reset_tcp_scale_rule() -> None
```

##### `reset_volume` <a name="reset_volume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.resetVolume"></a>

```python
def reset_volume() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.azureQueueScaleRule">azure_queue_scale_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList">ContainerAppTemplateAzureQueueScaleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList">ContainerAppTemplateContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.customScaleRule">custom_scale_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList">ContainerAppTemplateCustomScaleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.httpScaleRule">http_scale_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList">ContainerAppTemplateHttpScaleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.tcpScaleRule">tcp_scale_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList">ContainerAppTemplateTcpScaleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList">ContainerAppTemplateVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.azureQueueScaleRuleInput">azure_queue_scale_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.containerInput">container_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.customScaleRuleInput">custom_scale_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.httpScaleRuleInput">http_scale_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.maxReplicasInput">max_replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.minReplicasInput">min_replicas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.revisionSuffixInput">revision_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.tcpScaleRuleInput">tcp_scale_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.volumeInput">volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.maxReplicas">max_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.minReplicas">min_replicas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.revisionSuffix">revision_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_queue_scale_rule`<sup>Required</sup> <a name="azure_queue_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.azureQueueScaleRule"></a>

```python
azure_queue_scale_rule: ContainerAppTemplateAzureQueueScaleRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRuleList">ContainerAppTemplateAzureQueueScaleRuleList</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.container"></a>

```python
container: ContainerAppTemplateContainerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainerList">ContainerAppTemplateContainerList</a>

---

##### `custom_scale_rule`<sup>Required</sup> <a name="custom_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.customScaleRule"></a>

```python
custom_scale_rule: ContainerAppTemplateCustomScaleRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRuleList">ContainerAppTemplateCustomScaleRuleList</a>

---

##### `http_scale_rule`<sup>Required</sup> <a name="http_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.httpScaleRule"></a>

```python
http_scale_rule: ContainerAppTemplateHttpScaleRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRuleList">ContainerAppTemplateHttpScaleRuleList</a>

---

##### `tcp_scale_rule`<sup>Required</sup> <a name="tcp_scale_rule" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.tcpScaleRule"></a>

```python
tcp_scale_rule: ContainerAppTemplateTcpScaleRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList">ContainerAppTemplateTcpScaleRuleList</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.volume"></a>

```python
volume: ContainerAppTemplateVolumeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList">ContainerAppTemplateVolumeList</a>

---

##### `azure_queue_scale_rule_input`<sup>Optional</sup> <a name="azure_queue_scale_rule_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.azureQueueScaleRuleInput"></a>

```python
azure_queue_scale_rule_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateAzureQueueScaleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateAzureQueueScaleRule">ContainerAppTemplateAzureQueueScaleRule</a>]]

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.containerInput"></a>

```python
container_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateContainer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateContainer">ContainerAppTemplateContainer</a>]]

---

##### `custom_scale_rule_input`<sup>Optional</sup> <a name="custom_scale_rule_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.customScaleRuleInput"></a>

```python
custom_scale_rule_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateCustomScaleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateCustomScaleRule">ContainerAppTemplateCustomScaleRule</a>]]

---

##### `http_scale_rule_input`<sup>Optional</sup> <a name="http_scale_rule_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.httpScaleRuleInput"></a>

```python
http_scale_rule_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateHttpScaleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateHttpScaleRule">ContainerAppTemplateHttpScaleRule</a>]]

---

##### `max_replicas_input`<sup>Optional</sup> <a name="max_replicas_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.maxReplicasInput"></a>

```python
max_replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replicas_input`<sup>Optional</sup> <a name="min_replicas_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.minReplicasInput"></a>

```python
min_replicas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision_suffix_input`<sup>Optional</sup> <a name="revision_suffix_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.revisionSuffixInput"></a>

```python
revision_suffix_input: str
```

- *Type:* str

---

##### `tcp_scale_rule_input`<sup>Optional</sup> <a name="tcp_scale_rule_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.tcpScaleRuleInput"></a>

```python
tcp_scale_rule_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateTcpScaleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>]]

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.volumeInput"></a>

```python
volume_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>]]

---

##### `max_replicas`<sup>Required</sup> <a name="max_replicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.maxReplicas"></a>

```python
max_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_replicas`<sup>Required</sup> <a name="min_replicas" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.minReplicas"></a>

```python
min_replicas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `revision_suffix`<sup>Required</sup> <a name="revision_suffix" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.revisionSuffix"></a>

```python
revision_suffix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateOutputReference.property.internalValue"></a>

```python
internal_value: ContainerAppTemplate
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplate">ContainerAppTemplate</a>

---


### ContainerAppTemplateTcpScaleRuleAuthenticationList <a name="ContainerAppTemplateTcpScaleRuleAuthenticationList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateTcpScaleRuleAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>]]

---


### ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference <a name="ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resetTriggerParameter">reset_trigger_parameter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_trigger_parameter` <a name="reset_trigger_parameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.resetTriggerParameter"></a>

```python
def reset_trigger_parameter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.triggerParameterInput">trigger_parameter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.triggerParameter">trigger_parameter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `trigger_parameter_input`<sup>Optional</sup> <a name="trigger_parameter_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.triggerParameterInput"></a>

```python
trigger_parameter_input: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `trigger_parameter`<sup>Required</sup> <a name="trigger_parameter" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.triggerParameter"></a>

```python
trigger_parameter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateTcpScaleRuleAuthentication]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>]

---


### ContainerAppTemplateTcpScaleRuleList <a name="ContainerAppTemplateTcpScaleRuleList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateTcpScaleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateTcpScaleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateTcpScaleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>]]

---


### ContainerAppTemplateTcpScaleRuleOutputReference <a name="ContainerAppTemplateTcpScaleRuleOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateTcpScaleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resetAuthentication">reset_authentication</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication` <a name="put_authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.putAuthentication"></a>

```python
def put_authentication(
  value: typing.Union[IResolvable, typing.List[ContainerAppTemplateTcpScaleRuleAuthentication]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.putAuthentication.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>]]

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.resetAuthentication"></a>

```python
def reset_authentication() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList">ContainerAppTemplateTcpScaleRuleAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.authenticationInput">authentication_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.concurrentRequestsInput">concurrent_requests_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.concurrentRequests">concurrent_requests</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.authentication"></a>

```python
authentication: ContainerAppTemplateTcpScaleRuleAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthenticationList">ContainerAppTemplateTcpScaleRuleAuthenticationList</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.authenticationInput"></a>

```python
authentication_input: typing.Union[IResolvable, typing.List[ContainerAppTemplateTcpScaleRuleAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleAuthentication">ContainerAppTemplateTcpScaleRuleAuthentication</a>]]

---

##### `concurrent_requests_input`<sup>Optional</sup> <a name="concurrent_requests_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.concurrentRequestsInput"></a>

```python
concurrent_requests_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `concurrent_requests`<sup>Required</sup> <a name="concurrent_requests" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.concurrentRequests"></a>

```python
concurrent_requests: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateTcpScaleRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateTcpScaleRule">ContainerAppTemplateTcpScaleRule</a>]

---


### ContainerAppTemplateVolumeList <a name="ContainerAppTemplateVolumeList" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ContainerAppTemplateVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ContainerAppTemplateVolume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>]]

---


### ContainerAppTemplateVolumeOutputReference <a name="ContainerAppTemplateVolumeOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTemplateVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resetStorageName">reset_storage_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resetStorageType">reset_storage_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_storage_name` <a name="reset_storage_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resetStorageName"></a>

```python
def reset_storage_name() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.resetStorageType"></a>

```python
def reset_storage_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageNameInput">storage_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageName">storage_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_name_input`<sup>Optional</sup> <a name="storage_name_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageNameInput"></a>

```python
storage_name_input: str
```

- *Type:* str

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `storage_name`<sup>Required</sup> <a name="storage_name" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageName"></a>

```python
storage_name: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTemplateVolume]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTemplateVolume">ContainerAppTemplateVolume</a>]

---


### ContainerAppTimeoutsOutputReference <a name="ContainerAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import container_app

containerApp.ContainerAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.containerApp.ContainerAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerAppTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.containerApp.ContainerAppTimeouts">ContainerAppTimeouts</a>]

---



