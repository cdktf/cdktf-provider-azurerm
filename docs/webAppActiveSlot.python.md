# `azurerm_web_app_active_slot`

Refer to the Terraform Registory for docs: [`azurerm_web_app_active_slot`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot).

# `webAppActiveSlot` Submodule <a name="`webAppActiveSlot` Submodule" id="@cdktf/provider-azurerm.webAppActiveSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebAppActiveSlot <a name="WebAppActiveSlot" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot azurerm_web_app_active_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_app_active_slot

webAppActiveSlot.WebAppActiveSlot(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  slot_id: str,
  id: str = None,
  overwrite_network_config: typing.Union[bool, IResolvable] = None,
  timeouts: WebAppActiveSlotTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.slotId">slot_id</a></code> | <code>str</code> | The ID of the Slot to swap with `Production`. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#id WebAppActiveSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.overwriteNetworkConfig">overwrite_network_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The swap action should overwrite the Production slot's network configuration with the configuration from this slot. Defaults to `true`. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts">WebAppActiveSlotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `slot_id`<sup>Required</sup> <a name="slot_id" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.slotId"></a>

- *Type:* str

The ID of the Slot to swap with `Production`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#slot_id WebAppActiveSlot#slot_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#id WebAppActiveSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwrite_network_config`<sup>Optional</sup> <a name="overwrite_network_config" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.overwriteNetworkConfig"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The swap action should overwrite the Production slot's network configuration with the configuration from this slot. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#overwrite_network_config WebAppActiveSlot#overwrite_network_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts">WebAppActiveSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#timeouts WebAppActiveSlot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.resetOverwriteNetworkConfig">reset_overwrite_network_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#create WebAppActiveSlot#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#delete WebAppActiveSlot#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#read WebAppActiveSlot#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#update WebAppActiveSlot#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_overwrite_network_config` <a name="reset_overwrite_network_config" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.resetOverwriteNetworkConfig"></a>

```python
def reset_overwrite_network_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import web_app_active_slot

webAppActiveSlot.WebAppActiveSlot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import web_app_active_slot

webAppActiveSlot.WebAppActiveSlot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import web_app_active_slot

webAppActiveSlot.WebAppActiveSlot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.lastSuccessfulSwap">last_successful_swap</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference">WebAppActiveSlotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.overwriteNetworkConfigInput">overwrite_network_config_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.slotIdInput">slot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts">WebAppActiveSlotTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.overwriteNetworkConfig">overwrite_network_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.slotId">slot_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `last_successful_swap`<sup>Required</sup> <a name="last_successful_swap" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.lastSuccessfulSwap"></a>

```python
last_successful_swap: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.timeouts"></a>

```python
timeouts: WebAppActiveSlotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference">WebAppActiveSlotTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `overwrite_network_config_input`<sup>Optional</sup> <a name="overwrite_network_config_input" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.overwriteNetworkConfigInput"></a>

```python
overwrite_network_config_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `slot_id_input`<sup>Optional</sup> <a name="slot_id_input" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.slotIdInput"></a>

```python
slot_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WebAppActiveSlotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts">WebAppActiveSlotTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `overwrite_network_config`<sup>Required</sup> <a name="overwrite_network_config" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.overwriteNetworkConfig"></a>

```python
overwrite_network_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `slot_id`<sup>Required</sup> <a name="slot_id" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.slotId"></a>

```python
slot_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WebAppActiveSlotConfig <a name="WebAppActiveSlotConfig" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_app_active_slot

webAppActiveSlot.WebAppActiveSlotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  slot_id: str,
  id: str = None,
  overwrite_network_config: typing.Union[bool, IResolvable] = None,
  timeouts: WebAppActiveSlotTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.slotId">slot_id</a></code> | <code>str</code> | The ID of the Slot to swap with `Production`. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#id WebAppActiveSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.overwriteNetworkConfig">overwrite_network_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The swap action should overwrite the Production slot's network configuration with the configuration from this slot. Defaults to `true`. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts">WebAppActiveSlotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `slot_id`<sup>Required</sup> <a name="slot_id" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.slotId"></a>

```python
slot_id: str
```

- *Type:* str

The ID of the Slot to swap with `Production`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#slot_id WebAppActiveSlot#slot_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#id WebAppActiveSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `overwrite_network_config`<sup>Optional</sup> <a name="overwrite_network_config" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.overwriteNetworkConfig"></a>

```python
overwrite_network_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The swap action should overwrite the Production slot's network configuration with the configuration from this slot. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#overwrite_network_config WebAppActiveSlot#overwrite_network_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotConfig.property.timeouts"></a>

```python
timeouts: WebAppActiveSlotTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts">WebAppActiveSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#timeouts WebAppActiveSlot#timeouts}

---

### WebAppActiveSlotTimeouts <a name="WebAppActiveSlotTimeouts" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_app_active_slot

webAppActiveSlot.WebAppActiveSlotTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#create WebAppActiveSlot#create}. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#delete WebAppActiveSlot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#read WebAppActiveSlot#read}. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#update WebAppActiveSlot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#create WebAppActiveSlot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#delete WebAppActiveSlot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#read WebAppActiveSlot#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_app_active_slot#update WebAppActiveSlot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebAppActiveSlotTimeoutsOutputReference <a name="WebAppActiveSlotTimeoutsOutputReference" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_app_active_slot

webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts">WebAppActiveSlotTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebAppActiveSlotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webAppActiveSlot.WebAppActiveSlotTimeouts">WebAppActiveSlotTimeouts</a>]

---



