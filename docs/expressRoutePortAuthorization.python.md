# `expressRoutePortAuthorization` Submodule <a name="`expressRoutePortAuthorization` Submodule" id="@cdktf/provider-azurerm.expressRoutePortAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRoutePortAuthorization <a name="ExpressRoutePortAuthorization" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization azurerm_express_route_port_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port_authorization

expressRoutePortAuthorization.ExpressRoutePortAuthorization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  express_route_port_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: ExpressRoutePortAuthorizationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.expressRoutePortName">express_route_port_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#express_route_port_name ExpressRoutePortAuthorization#express_route_port_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#name ExpressRoutePortAuthorization#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#resource_group_name ExpressRoutePortAuthorization#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#id ExpressRoutePortAuthorization#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts">ExpressRoutePortAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `express_route_port_name`<sup>Required</sup> <a name="express_route_port_name" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.expressRoutePortName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#express_route_port_name ExpressRoutePortAuthorization#express_route_port_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#name ExpressRoutePortAuthorization#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#resource_group_name ExpressRoutePortAuthorization#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#id ExpressRoutePortAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts">ExpressRoutePortAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#timeouts ExpressRoutePortAuthorization#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#create ExpressRoutePortAuthorization#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#delete ExpressRoutePortAuthorization#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#read ExpressRoutePortAuthorization#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ExpressRoutePortAuthorization resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port_authorization

expressRoutePortAuthorization.ExpressRoutePortAuthorization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port_authorization

expressRoutePortAuthorization.ExpressRoutePortAuthorization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port_authorization

expressRoutePortAuthorization.ExpressRoutePortAuthorization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port_authorization

expressRoutePortAuthorization.ExpressRoutePortAuthorization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ExpressRoutePortAuthorization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ExpressRoutePortAuthorization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ExpressRoutePortAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExpressRoutePortAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.authorizationKey">authorization_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.authorizationUseStatus">authorization_use_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference">ExpressRoutePortAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.expressRoutePortNameInput">express_route_port_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts">ExpressRoutePortAuthorizationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.expressRoutePortName">express_route_port_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authorization_key`<sup>Required</sup> <a name="authorization_key" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.authorizationKey"></a>

```python
authorization_key: str
```

- *Type:* str

---

##### `authorization_use_status`<sup>Required</sup> <a name="authorization_use_status" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.authorizationUseStatus"></a>

```python
authorization_use_status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.timeouts"></a>

```python
timeouts: ExpressRoutePortAuthorizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference">ExpressRoutePortAuthorizationTimeoutsOutputReference</a>

---

##### `express_route_port_name_input`<sup>Optional</sup> <a name="express_route_port_name_input" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.expressRoutePortNameInput"></a>

```python
express_route_port_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ExpressRoutePortAuthorizationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts">ExpressRoutePortAuthorizationTimeouts</a>]

---

##### `express_route_port_name`<sup>Required</sup> <a name="express_route_port_name" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.expressRoutePortName"></a>

```python
express_route_port_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRoutePortAuthorizationConfig <a name="ExpressRoutePortAuthorizationConfig" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port_authorization

expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  express_route_port_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: ExpressRoutePortAuthorizationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.expressRoutePortName">express_route_port_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#express_route_port_name ExpressRoutePortAuthorization#express_route_port_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#name ExpressRoutePortAuthorization#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#resource_group_name ExpressRoutePortAuthorization#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#id ExpressRoutePortAuthorization#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts">ExpressRoutePortAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `express_route_port_name`<sup>Required</sup> <a name="express_route_port_name" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.expressRoutePortName"></a>

```python
express_route_port_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#express_route_port_name ExpressRoutePortAuthorization#express_route_port_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#name ExpressRoutePortAuthorization#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#resource_group_name ExpressRoutePortAuthorization#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#id ExpressRoutePortAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationConfig.property.timeouts"></a>

```python
timeouts: ExpressRoutePortAuthorizationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts">ExpressRoutePortAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#timeouts ExpressRoutePortAuthorization#timeouts}

---

### ExpressRoutePortAuthorizationTimeouts <a name="ExpressRoutePortAuthorizationTimeouts" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port_authorization

expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#create ExpressRoutePortAuthorization#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#delete ExpressRoutePortAuthorization#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#read ExpressRoutePortAuthorization#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#create ExpressRoutePortAuthorization#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#delete ExpressRoutePortAuthorization#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/express_route_port_authorization#read ExpressRoutePortAuthorization#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRoutePortAuthorizationTimeoutsOutputReference <a name="ExpressRoutePortAuthorizationTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_port_authorization

expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts">ExpressRoutePortAuthorizationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExpressRoutePortAuthorizationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRoutePortAuthorization.ExpressRoutePortAuthorizationTimeouts">ExpressRoutePortAuthorizationTimeouts</a>]

---



