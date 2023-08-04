# `data_azurerm_express_route_circuit`

Refer to the Terraform Registory for docs: [`data_azurerm_express_route_circuit`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit).

# `dataAzurermExpressRouteCircuit` Submodule <a name="`dataAzurermExpressRouteCircuit` Submodule" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermExpressRouteCircuit <a name="DataAzurermExpressRouteCircuit" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit azurerm_express_route_circuit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit(
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
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermExpressRouteCircuitTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#name DataAzurermExpressRouteCircuit#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#resource_group_name DataAzurermExpressRouteCircuit#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#id DataAzurermExpressRouteCircuit#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#name DataAzurermExpressRouteCircuit#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#resource_group_name DataAzurermExpressRouteCircuit#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#id DataAzurermExpressRouteCircuit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#timeouts DataAzurermExpressRouteCircuit#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#read DataAzurermExpressRouteCircuit#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.peerings">peerings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList">DataAzurermExpressRouteCircuitPeeringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.serviceKey">service_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.serviceProviderProperties">service_provider_properties</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList">DataAzurermExpressRouteCircuitServiceProviderPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.serviceProviderProvisioningState">service_provider_provisioning_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.sku">sku</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList">DataAzurermExpressRouteCircuitSkuList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference">DataAzurermExpressRouteCircuitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `peerings`<sup>Required</sup> <a name="peerings" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.peerings"></a>

```python
peerings: DataAzurermExpressRouteCircuitPeeringsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList">DataAzurermExpressRouteCircuitPeeringsList</a>

---

##### `service_key`<sup>Required</sup> <a name="service_key" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.serviceKey"></a>

```python
service_key: str
```

- *Type:* str

---

##### `service_provider_properties`<sup>Required</sup> <a name="service_provider_properties" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.serviceProviderProperties"></a>

```python
service_provider_properties: DataAzurermExpressRouteCircuitServiceProviderPropertiesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList">DataAzurermExpressRouteCircuitServiceProviderPropertiesList</a>

---

##### `service_provider_provisioning_state`<sup>Required</sup> <a name="service_provider_provisioning_state" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.serviceProviderProvisioningState"></a>

```python
service_provider_provisioning_state: str
```

- *Type:* str

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.sku"></a>

```python
sku: DataAzurermExpressRouteCircuitSkuList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList">DataAzurermExpressRouteCircuitSkuList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.timeouts"></a>

```python
timeouts: DataAzurermExpressRouteCircuitTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference">DataAzurermExpressRouteCircuitTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermExpressRouteCircuitTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermExpressRouteCircuitConfig <a name="DataAzurermExpressRouteCircuitConfig" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermExpressRouteCircuitTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#name DataAzurermExpressRouteCircuit#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#resource_group_name DataAzurermExpressRouteCircuit#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#id DataAzurermExpressRouteCircuit#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#name DataAzurermExpressRouteCircuit#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#resource_group_name DataAzurermExpressRouteCircuit#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#id DataAzurermExpressRouteCircuit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitConfig.property.timeouts"></a>

```python
timeouts: DataAzurermExpressRouteCircuitTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#timeouts DataAzurermExpressRouteCircuit#timeouts}

---

### DataAzurermExpressRouteCircuitPeerings <a name="DataAzurermExpressRouteCircuitPeerings" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeerings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeerings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeerings()
```


### DataAzurermExpressRouteCircuitServiceProviderProperties <a name="DataAzurermExpressRouteCircuitServiceProviderProperties" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderProperties()
```


### DataAzurermExpressRouteCircuitSku <a name="DataAzurermExpressRouteCircuitSku" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSku.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSku()
```


### DataAzurermExpressRouteCircuitTimeouts <a name="DataAzurermExpressRouteCircuitTimeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#read DataAzurermExpressRouteCircuit#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/data-sources/express_route_circuit#read DataAzurermExpressRouteCircuit#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermExpressRouteCircuitPeeringsList <a name="DataAzurermExpressRouteCircuitPeeringsList" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermExpressRouteCircuitPeeringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermExpressRouteCircuitPeeringsOutputReference <a name="DataAzurermExpressRouteCircuitPeeringsOutputReference" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.azureAsn">azure_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.peerAsn">peer_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.peeringType">peering_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.primaryPeerAddressPrefix">primary_peer_address_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.secondaryPeerAddressPrefix">secondary_peer_address_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.sharedKey">shared_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeerings">DataAzurermExpressRouteCircuitPeerings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_asn`<sup>Required</sup> <a name="azure_asn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.azureAsn"></a>

```python
azure_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_asn`<sup>Required</sup> <a name="peer_asn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.peerAsn"></a>

```python
peer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peering_type`<sup>Required</sup> <a name="peering_type" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.peeringType"></a>

```python
peering_type: str
```

- *Type:* str

---

##### `primary_peer_address_prefix`<sup>Required</sup> <a name="primary_peer_address_prefix" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.primaryPeerAddressPrefix"></a>

```python
primary_peer_address_prefix: str
```

- *Type:* str

---

##### `secondary_peer_address_prefix`<sup>Required</sup> <a name="secondary_peer_address_prefix" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.secondaryPeerAddressPrefix"></a>

```python
secondary_peer_address_prefix: str
```

- *Type:* str

---

##### `shared_key`<sup>Required</sup> <a name="shared_key" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.sharedKey"></a>

```python
shared_key: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.vlanId"></a>

```python
vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeeringsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermExpressRouteCircuitPeerings
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitPeerings">DataAzurermExpressRouteCircuitPeerings</a>

---


### DataAzurermExpressRouteCircuitServiceProviderPropertiesList <a name="DataAzurermExpressRouteCircuitServiceProviderPropertiesList" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference <a name="DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.bandwidthInMbps">bandwidth_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.peeringLocation">peering_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.serviceProviderName">service_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderProperties">DataAzurermExpressRouteCircuitServiceProviderProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth_in_mbps`<sup>Required</sup> <a name="bandwidth_in_mbps" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.bandwidthInMbps"></a>

```python
bandwidth_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peering_location`<sup>Required</sup> <a name="peering_location" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.peeringLocation"></a>

```python
peering_location: str
```

- *Type:* str

---

##### `service_provider_name`<sup>Required</sup> <a name="service_provider_name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.serviceProviderName"></a>

```python
service_provider_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermExpressRouteCircuitServiceProviderProperties
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitServiceProviderProperties">DataAzurermExpressRouteCircuitServiceProviderProperties</a>

---


### DataAzurermExpressRouteCircuitSkuList <a name="DataAzurermExpressRouteCircuitSkuList" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermExpressRouteCircuitSkuOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermExpressRouteCircuitSkuOutputReference <a name="DataAzurermExpressRouteCircuitSkuOutputReference" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.family">family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSku">DataAzurermExpressRouteCircuitSku</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `family`<sup>Required</sup> <a name="family" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.family"></a>

```python
family: str
```

- *Type:* str

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSkuOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermExpressRouteCircuitSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitSku">DataAzurermExpressRouteCircuitSku</a>

---


### DataAzurermExpressRouteCircuitTimeoutsOutputReference <a name="DataAzurermExpressRouteCircuitTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit

dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermExpressRouteCircuitTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuit.DataAzurermExpressRouteCircuitTimeouts">DataAzurermExpressRouteCircuitTimeouts</a>]

---



