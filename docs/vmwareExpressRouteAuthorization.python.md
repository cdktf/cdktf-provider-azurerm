# `vmwareExpressRouteAuthorization` Submodule <a name="`vmwareExpressRouteAuthorization` Submodule" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareExpressRouteAuthorization <a name="VmwareExpressRouteAuthorization" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization azurerm_vmware_express_route_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_express_route_authorization

vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization(
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
  private_cloud_id: str,
  id: str = None,
  timeouts: VmwareExpressRouteAuthorizationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#name VmwareExpressRouteAuthorization#name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.privateCloudId">private_cloud_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#private_cloud_id VmwareExpressRouteAuthorization#private_cloud_id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#id VmwareExpressRouteAuthorization#id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#name VmwareExpressRouteAuthorization#name}.

---

##### `private_cloud_id`<sup>Required</sup> <a name="private_cloud_id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.privateCloudId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#private_cloud_id VmwareExpressRouteAuthorization#private_cloud_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#id VmwareExpressRouteAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#timeouts VmwareExpressRouteAuthorization#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#create VmwareExpressRouteAuthorization#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#delete VmwareExpressRouteAuthorization#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#read VmwareExpressRouteAuthorization#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VmwareExpressRouteAuthorization resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_express_route_authorization

vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_express_route_authorization

vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_express_route_authorization

vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_express_route_authorization

vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VmwareExpressRouteAuthorization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VmwareExpressRouteAuthorization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VmwareExpressRouteAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VmwareExpressRouteAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationId">express_route_authorization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationKey">express_route_authorization_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference">VmwareExpressRouteAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudIdInput">private_cloud_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudId">private_cloud_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `express_route_authorization_id`<sup>Required</sup> <a name="express_route_authorization_id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationId"></a>

```python
express_route_authorization_id: str
```

- *Type:* str

---

##### `express_route_authorization_key`<sup>Required</sup> <a name="express_route_authorization_key" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.expressRouteAuthorizationKey"></a>

```python
express_route_authorization_key: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeouts"></a>

```python
timeouts: VmwareExpressRouteAuthorizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference">VmwareExpressRouteAuthorizationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_cloud_id_input`<sup>Optional</sup> <a name="private_cloud_id_input" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudIdInput"></a>

```python
private_cloud_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VmwareExpressRouteAuthorizationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_cloud_id`<sup>Required</sup> <a name="private_cloud_id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.privateCloudId"></a>

```python
private_cloud_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareExpressRouteAuthorizationConfig <a name="VmwareExpressRouteAuthorizationConfig" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_express_route_authorization

vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  private_cloud_id: str,
  id: str = None,
  timeouts: VmwareExpressRouteAuthorizationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#name VmwareExpressRouteAuthorization#name}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.privateCloudId">private_cloud_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#private_cloud_id VmwareExpressRouteAuthorization#private_cloud_id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#id VmwareExpressRouteAuthorization#id}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#name VmwareExpressRouteAuthorization#name}.

---

##### `private_cloud_id`<sup>Required</sup> <a name="private_cloud_id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.privateCloudId"></a>

```python
private_cloud_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#private_cloud_id VmwareExpressRouteAuthorization#private_cloud_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#id VmwareExpressRouteAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationConfig.property.timeouts"></a>

```python
timeouts: VmwareExpressRouteAuthorizationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#timeouts VmwareExpressRouteAuthorization#timeouts}

---

### VmwareExpressRouteAuthorizationTimeouts <a name="VmwareExpressRouteAuthorizationTimeouts" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_express_route_authorization

vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#create VmwareExpressRouteAuthorization#create}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#delete VmwareExpressRouteAuthorization#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#read VmwareExpressRouteAuthorization#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#create VmwareExpressRouteAuthorization#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#delete VmwareExpressRouteAuthorization#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/vmware_express_route_authorization#read VmwareExpressRouteAuthorization#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareExpressRouteAuthorizationTimeoutsOutputReference <a name="VmwareExpressRouteAuthorizationTimeoutsOutputReference" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vmware_express_route_authorization

vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VmwareExpressRouteAuthorizationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vmwareExpressRouteAuthorization.VmwareExpressRouteAuthorizationTimeouts">VmwareExpressRouteAuthorizationTimeouts</a>]

---



