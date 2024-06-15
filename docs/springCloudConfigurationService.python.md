# `springCloudConfigurationService` Submodule <a name="`springCloudConfigurationService` Submodule" id="@cdktf/provider-azurerm.springCloudConfigurationService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudConfigurationService <a name="SpringCloudConfigurationService" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service azurerm_spring_cloud_configuration_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_configuration_service

springCloudConfigurationService.SpringCloudConfigurationService(
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
  spring_cloud_service_id: str,
  generation: str = None,
  id: str = None,
  refresh_interval_in_seconds: typing.Union[int, float] = None,
  repository: typing.Union[IResolvable, typing.List[SpringCloudConfigurationServiceRepository]] = None,
  timeouts: SpringCloudConfigurationServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#spring_cloud_service_id SpringCloudConfigurationService#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.generation">generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#generation SpringCloudConfigurationService#generation}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#id SpringCloudConfigurationService#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.refreshIntervalInSeconds">refresh_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#refresh_interval_in_seconds SpringCloudConfigurationService#refresh_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.repository">repository</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>]]</code> | repository block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}.

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.springCloudServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#spring_cloud_service_id SpringCloudConfigurationService#spring_cloud_service_id}.

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.generation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#generation SpringCloudConfigurationService#generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#id SpringCloudConfigurationService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_interval_in_seconds`<sup>Optional</sup> <a name="refresh_interval_in_seconds" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.refreshIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#refresh_interval_in_seconds SpringCloudConfigurationService#refresh_interval_in_seconds}.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.repository"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>]]

repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#repository SpringCloudConfigurationService#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#timeouts SpringCloudConfigurationService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putRepository">put_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetGeneration">reset_generation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetRefreshIntervalInSeconds">reset_refresh_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetRepository">reset_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_repository` <a name="put_repository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putRepository"></a>

```python
def put_repository(
  value: typing.Union[IResolvable, typing.List[SpringCloudConfigurationServiceRepository]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putRepository.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#create SpringCloudConfigurationService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#delete SpringCloudConfigurationService#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#read SpringCloudConfigurationService#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#update SpringCloudConfigurationService#update}.

---

##### `reset_generation` <a name="reset_generation" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetGeneration"></a>

```python
def reset_generation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_refresh_interval_in_seconds` <a name="reset_refresh_interval_in_seconds" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetRefreshIntervalInSeconds"></a>

```python
def reset_refresh_interval_in_seconds() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetRepository"></a>

```python
def reset_repository() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpringCloudConfigurationService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_configuration_service

springCloudConfigurationService.SpringCloudConfigurationService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_configuration_service

springCloudConfigurationService.SpringCloudConfigurationService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_configuration_service

springCloudConfigurationService.SpringCloudConfigurationService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_configuration_service

springCloudConfigurationService.SpringCloudConfigurationService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpringCloudConfigurationService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpringCloudConfigurationService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpringCloudConfigurationService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudConfigurationService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.repository">repository</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList">SpringCloudConfigurationServiceRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference">SpringCloudConfigurationServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.generationInput">generation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.refreshIntervalInSecondsInput">refresh_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.repositoryInput">repository_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.springCloudServiceIdInput">spring_cloud_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.generation">generation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.refreshIntervalInSeconds">refresh_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.repository"></a>

```python
repository: SpringCloudConfigurationServiceRepositoryList
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList">SpringCloudConfigurationServiceRepositoryList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.timeouts"></a>

```python
timeouts: SpringCloudConfigurationServiceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference">SpringCloudConfigurationServiceTimeoutsOutputReference</a>

---

##### `generation_input`<sup>Optional</sup> <a name="generation_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.generationInput"></a>

```python
generation_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `refresh_interval_in_seconds_input`<sup>Optional</sup> <a name="refresh_interval_in_seconds_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.refreshIntervalInSecondsInput"></a>

```python
refresh_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.repositoryInput"></a>

```python
repository_input: typing.Union[IResolvable, typing.List[SpringCloudConfigurationServiceRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>]]

---

##### `spring_cloud_service_id_input`<sup>Optional</sup> <a name="spring_cloud_service_id_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.springCloudServiceIdInput"></a>

```python
spring_cloud_service_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SpringCloudConfigurationServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a>]

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.generation"></a>

```python
generation: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `refresh_interval_in_seconds`<sup>Required</sup> <a name="refresh_interval_in_seconds" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.refreshIntervalInSeconds"></a>

```python
refresh_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.springCloudServiceId"></a>

```python
spring_cloud_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudConfigurationServiceConfig <a name="SpringCloudConfigurationServiceConfig" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_configuration_service

springCloudConfigurationService.SpringCloudConfigurationServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  spring_cloud_service_id: str,
  generation: str = None,
  id: str = None,
  refresh_interval_in_seconds: typing.Union[int, float] = None,
  repository: typing.Union[IResolvable, typing.List[SpringCloudConfigurationServiceRepository]] = None,
  timeouts: SpringCloudConfigurationServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.springCloudServiceId">spring_cloud_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#spring_cloud_service_id SpringCloudConfigurationService#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.generation">generation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#generation SpringCloudConfigurationService#generation}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#id SpringCloudConfigurationService#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.refreshIntervalInSeconds">refresh_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#refresh_interval_in_seconds SpringCloudConfigurationService#refresh_interval_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.repository">repository</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>]]</code> | repository block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}.

---

##### `spring_cloud_service_id`<sup>Required</sup> <a name="spring_cloud_service_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.springCloudServiceId"></a>

```python
spring_cloud_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#spring_cloud_service_id SpringCloudConfigurationService#spring_cloud_service_id}.

---

##### `generation`<sup>Optional</sup> <a name="generation" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.generation"></a>

```python
generation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#generation SpringCloudConfigurationService#generation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#id SpringCloudConfigurationService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `refresh_interval_in_seconds`<sup>Optional</sup> <a name="refresh_interval_in_seconds" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.refreshIntervalInSeconds"></a>

```python
refresh_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#refresh_interval_in_seconds SpringCloudConfigurationService#refresh_interval_in_seconds}.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.repository"></a>

```python
repository: typing.Union[IResolvable, typing.List[SpringCloudConfigurationServiceRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>]]

repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#repository SpringCloudConfigurationService#repository}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceConfig.property.timeouts"></a>

```python
timeouts: SpringCloudConfigurationServiceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#timeouts SpringCloudConfigurationService#timeouts}

---

### SpringCloudConfigurationServiceRepository <a name="SpringCloudConfigurationServiceRepository" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_configuration_service

springCloudConfigurationService.SpringCloudConfigurationServiceRepository(
  label: str,
  name: str,
  patterns: typing.List[str],
  uri: str,
  ca_certificate_id: str = None,
  host_key: str = None,
  host_key_algorithm: str = None,
  password: str = None,
  private_key: str = None,
  search_paths: typing.List[str] = None,
  strict_host_key_checking: typing.Union[bool, IResolvable] = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#label SpringCloudConfigurationService#label}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.patterns">patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#patterns SpringCloudConfigurationService#patterns}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#uri SpringCloudConfigurationService#uri}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.caCertificateId">ca_certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#ca_certificate_id SpringCloudConfigurationService#ca_certificate_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.hostKey">host_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#host_key SpringCloudConfigurationService#host_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.hostKeyAlgorithm">host_key_algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#host_key_algorithm SpringCloudConfigurationService#host_key_algorithm}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#password SpringCloudConfigurationService#password}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#private_key SpringCloudConfigurationService#private_key}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.searchPaths">search_paths</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#search_paths SpringCloudConfigurationService#search_paths}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.strictHostKeyChecking">strict_host_key_checking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#strict_host_key_checking SpringCloudConfigurationService#strict_host_key_checking}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#username SpringCloudConfigurationService#username}. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#label SpringCloudConfigurationService#label}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#name SpringCloudConfigurationService#name}.

---

##### `patterns`<sup>Required</sup> <a name="patterns" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.patterns"></a>

```python
patterns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#patterns SpringCloudConfigurationService#patterns}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#uri SpringCloudConfigurationService#uri}.

---

##### `ca_certificate_id`<sup>Optional</sup> <a name="ca_certificate_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.caCertificateId"></a>

```python
ca_certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#ca_certificate_id SpringCloudConfigurationService#ca_certificate_id}.

---

##### `host_key`<sup>Optional</sup> <a name="host_key" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.hostKey"></a>

```python
host_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#host_key SpringCloudConfigurationService#host_key}.

---

##### `host_key_algorithm`<sup>Optional</sup> <a name="host_key_algorithm" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.hostKeyAlgorithm"></a>

```python
host_key_algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#host_key_algorithm SpringCloudConfigurationService#host_key_algorithm}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#password SpringCloudConfigurationService#password}.

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#private_key SpringCloudConfigurationService#private_key}.

---

##### `search_paths`<sup>Optional</sup> <a name="search_paths" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.searchPaths"></a>

```python
search_paths: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#search_paths SpringCloudConfigurationService#search_paths}.

---

##### `strict_host_key_checking`<sup>Optional</sup> <a name="strict_host_key_checking" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.strictHostKeyChecking"></a>

```python
strict_host_key_checking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#strict_host_key_checking SpringCloudConfigurationService#strict_host_key_checking}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#username SpringCloudConfigurationService#username}.

---

### SpringCloudConfigurationServiceTimeouts <a name="SpringCloudConfigurationServiceTimeouts" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_configuration_service

springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#create SpringCloudConfigurationService#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#delete SpringCloudConfigurationService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#read SpringCloudConfigurationService#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#update SpringCloudConfigurationService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#create SpringCloudConfigurationService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#delete SpringCloudConfigurationService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#read SpringCloudConfigurationService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.108.0/docs/resources/spring_cloud_configuration_service#update SpringCloudConfigurationService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudConfigurationServiceRepositoryList <a name="SpringCloudConfigurationServiceRepositoryList" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_configuration_service

springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SpringCloudConfigurationServiceRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SpringCloudConfigurationServiceRepository]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>]]

---


### SpringCloudConfigurationServiceRepositoryOutputReference <a name="SpringCloudConfigurationServiceRepositoryOutputReference" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_configuration_service

springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetCaCertificateId">reset_ca_certificate_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetHostKey">reset_host_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetHostKeyAlgorithm">reset_host_key_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetSearchPaths">reset_search_paths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetStrictHostKeyChecking">reset_strict_host_key_checking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ca_certificate_id` <a name="reset_ca_certificate_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetCaCertificateId"></a>

```python
def reset_ca_certificate_id() -> None
```

##### `reset_host_key` <a name="reset_host_key" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetHostKey"></a>

```python
def reset_host_key() -> None
```

##### `reset_host_key_algorithm` <a name="reset_host_key_algorithm" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetHostKeyAlgorithm"></a>

```python
def reset_host_key_algorithm() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_search_paths` <a name="reset_search_paths" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetSearchPaths"></a>

```python
def reset_search_paths() -> None
```

##### `reset_strict_host_key_checking` <a name="reset_strict_host_key_checking" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetStrictHostKeyChecking"></a>

```python
def reset_strict_host_key_checking() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.caCertificateIdInput">ca_certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyAlgorithmInput">host_key_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyInput">host_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.patternsInput">patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.searchPathsInput">search_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.strictHostKeyCheckingInput">strict_host_key_checking_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.caCertificateId">ca_certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKey">host_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyAlgorithm">host_key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.patterns">patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.searchPaths">search_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.strictHostKeyChecking">strict_host_key_checking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_certificate_id_input`<sup>Optional</sup> <a name="ca_certificate_id_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.caCertificateIdInput"></a>

```python
ca_certificate_id_input: str
```

- *Type:* str

---

##### `host_key_algorithm_input`<sup>Optional</sup> <a name="host_key_algorithm_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyAlgorithmInput"></a>

```python
host_key_algorithm_input: str
```

- *Type:* str

---

##### `host_key_input`<sup>Optional</sup> <a name="host_key_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyInput"></a>

```python
host_key_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `patterns_input`<sup>Optional</sup> <a name="patterns_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.patternsInput"></a>

```python
patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `search_paths_input`<sup>Optional</sup> <a name="search_paths_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.searchPathsInput"></a>

```python
search_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `strict_host_key_checking_input`<sup>Optional</sup> <a name="strict_host_key_checking_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.strictHostKeyCheckingInput"></a>

```python
strict_host_key_checking_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `ca_certificate_id`<sup>Required</sup> <a name="ca_certificate_id" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.caCertificateId"></a>

```python
ca_certificate_id: str
```

- *Type:* str

---

##### `host_key`<sup>Required</sup> <a name="host_key" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKey"></a>

```python
host_key: str
```

- *Type:* str

---

##### `host_key_algorithm`<sup>Required</sup> <a name="host_key_algorithm" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.hostKeyAlgorithm"></a>

```python
host_key_algorithm: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `patterns`<sup>Required</sup> <a name="patterns" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.patterns"></a>

```python
patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `search_paths`<sup>Required</sup> <a name="search_paths" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.searchPaths"></a>

```python
search_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `strict_host_key_checking`<sup>Required</sup> <a name="strict_host_key_checking" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.strictHostKeyChecking"></a>

```python
strict_host_key_checking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudConfigurationServiceRepository]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceRepository">SpringCloudConfigurationServiceRepository</a>]

---


### SpringCloudConfigurationServiceTimeoutsOutputReference <a name="SpringCloudConfigurationServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_configuration_service

springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SpringCloudConfigurationServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.springCloudConfigurationService.SpringCloudConfigurationServiceTimeouts">SpringCloudConfigurationServiceTimeouts</a>]

---



