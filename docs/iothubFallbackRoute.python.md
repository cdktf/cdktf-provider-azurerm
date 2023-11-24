# `azurerm_iothub_fallback_route`

Refer to the Terraform Registory for docs: [`azurerm_iothub_fallback_route`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route).

# `iothubFallbackRoute` Submodule <a name="`iothubFallbackRoute` Submodule" id="@cdktf/provider-azurerm.iothubFallbackRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IothubFallbackRouteA <a name="IothubFallbackRouteA" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route azurerm_iothub_fallback_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_fallback_route

iothubFallbackRoute.IothubFallbackRouteA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  endpoint_names: typing.List[str],
  iothub_name: str,
  resource_group_name: str,
  condition: str = None,
  id: str = None,
  source: str = None,
  timeouts: IothubFallbackRouteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#enabled IothubFallbackRouteA#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.endpointNames">endpoint_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#endpoint_names IothubFallbackRouteA#endpoint_names}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.iothubName">iothub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#iothub_name IothubFallbackRouteA#iothub_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#resource_group_name IothubFallbackRouteA#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#condition IothubFallbackRouteA#condition}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#id IothubFallbackRouteA#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#source IothubFallbackRouteA#source}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#enabled IothubFallbackRouteA#enabled}.

---

##### `endpoint_names`<sup>Required</sup> <a name="endpoint_names" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.endpointNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#endpoint_names IothubFallbackRouteA#endpoint_names}.

---

##### `iothub_name`<sup>Required</sup> <a name="iothub_name" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.iothubName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#iothub_name IothubFallbackRouteA#iothub_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#resource_group_name IothubFallbackRouteA#resource_group_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.condition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#condition IothubFallbackRouteA#condition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#id IothubFallbackRouteA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#source IothubFallbackRouteA#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#timeouts IothubFallbackRouteA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#create IothubFallbackRouteA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#delete IothubFallbackRouteA#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#read IothubFallbackRouteA#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#update IothubFallbackRouteA#update}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IothubFallbackRouteA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_fallback_route

iothubFallbackRoute.IothubFallbackRouteA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_fallback_route

iothubFallbackRoute.IothubFallbackRouteA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_fallback_route

iothubFallbackRoute.IothubFallbackRouteA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_fallback_route

iothubFallbackRoute.IothubFallbackRouteA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IothubFallbackRouteA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IothubFallbackRouteA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IothubFallbackRouteA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IothubFallbackRouteA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference">IothubFallbackRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.endpointNamesInput">endpoint_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.iothubNameInput">iothub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.endpointNames">endpoint_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.iothubName">iothub_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.source">source</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.timeouts"></a>

```python
timeouts: IothubFallbackRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference">IothubFallbackRouteTimeoutsOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_names_input`<sup>Optional</sup> <a name="endpoint_names_input" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.endpointNamesInput"></a>

```python
endpoint_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iothub_name_input`<sup>Optional</sup> <a name="iothub_name_input" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.iothubNameInput"></a>

```python
iothub_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IothubFallbackRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `endpoint_names`<sup>Required</sup> <a name="endpoint_names" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.endpointNames"></a>

```python
endpoint_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iothub_name`<sup>Required</sup> <a name="iothub_name" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.iothubName"></a>

```python
iothub_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.source"></a>

```python
source: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IothubFallbackRouteAConfig <a name="IothubFallbackRouteAConfig" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_fallback_route

iothubFallbackRoute.IothubFallbackRouteAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enabled: typing.Union[bool, IResolvable],
  endpoint_names: typing.List[str],
  iothub_name: str,
  resource_group_name: str,
  condition: str = None,
  id: str = None,
  source: str = None,
  timeouts: IothubFallbackRouteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#enabled IothubFallbackRouteA#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.endpointNames">endpoint_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#endpoint_names IothubFallbackRouteA#endpoint_names}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.iothubName">iothub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#iothub_name IothubFallbackRouteA#iothub_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#resource_group_name IothubFallbackRouteA#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#condition IothubFallbackRouteA#condition}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#id IothubFallbackRouteA#id}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#source IothubFallbackRouteA#source}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#enabled IothubFallbackRouteA#enabled}.

---

##### `endpoint_names`<sup>Required</sup> <a name="endpoint_names" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.endpointNames"></a>

```python
endpoint_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#endpoint_names IothubFallbackRouteA#endpoint_names}.

---

##### `iothub_name`<sup>Required</sup> <a name="iothub_name" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.iothubName"></a>

```python
iothub_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#iothub_name IothubFallbackRouteA#iothub_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#resource_group_name IothubFallbackRouteA#resource_group_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#condition IothubFallbackRouteA#condition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#id IothubFallbackRouteA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#source IothubFallbackRouteA#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteAConfig.property.timeouts"></a>

```python
timeouts: IothubFallbackRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#timeouts IothubFallbackRouteA#timeouts}

---

### IothubFallbackRouteTimeouts <a name="IothubFallbackRouteTimeouts" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_fallback_route

iothubFallbackRoute.IothubFallbackRouteTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#create IothubFallbackRouteA#create}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#delete IothubFallbackRouteA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#read IothubFallbackRouteA#read}. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#update IothubFallbackRouteA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#create IothubFallbackRouteA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#delete IothubFallbackRouteA#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#read IothubFallbackRouteA#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/iothub_fallback_route#update IothubFallbackRouteA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IothubFallbackRouteTimeoutsOutputReference <a name="IothubFallbackRouteTimeoutsOutputReference" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iothub_fallback_route

iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IothubFallbackRouteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iothubFallbackRoute.IothubFallbackRouteTimeouts">IothubFallbackRouteTimeouts</a>]

---



