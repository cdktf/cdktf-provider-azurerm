# `dataAzurermExpressRouteCircuitPeering` Submodule <a name="`dataAzurermExpressRouteCircuitPeering` Submodule" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermExpressRouteCircuitPeering <a name="DataAzurermExpressRouteCircuitPeering" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering azurerm_express_route_circuit_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit_peering

dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  express_route_circuit_name: str,
  peering_type: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermExpressRouteCircuitPeeringTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.expressRouteCircuitName">express_route_circuit_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#express_route_circuit_name DataAzurermExpressRouteCircuitPeering#express_route_circuit_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.peeringType">peering_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#peering_type DataAzurermExpressRouteCircuitPeering#peering_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#resource_group_name DataAzurermExpressRouteCircuitPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#id DataAzurermExpressRouteCircuitPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `express_route_circuit_name`<sup>Required</sup> <a name="express_route_circuit_name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.expressRouteCircuitName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#express_route_circuit_name DataAzurermExpressRouteCircuitPeering#express_route_circuit_name}.

---

##### `peering_type`<sup>Required</sup> <a name="peering_type" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.peeringType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#peering_type DataAzurermExpressRouteCircuitPeering#peering_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#resource_group_name DataAzurermExpressRouteCircuitPeering#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#id DataAzurermExpressRouteCircuitPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#timeouts DataAzurermExpressRouteCircuitPeering#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#read DataAzurermExpressRouteCircuitPeering#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermExpressRouteCircuitPeering resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit_peering

dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit_peering

dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit_peering

dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit_peering

dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermExpressRouteCircuitPeering resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermExpressRouteCircuitPeering to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermExpressRouteCircuitPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermExpressRouteCircuitPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.azureAsn">azure_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.gatewayManagerEtag">gateway_manager_etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.ipv4Enabled">ipv4_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peerAsn">peer_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.primaryAzurePort">primary_azure_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.primaryPeerAddressPrefix">primary_peer_address_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.routeFilterId">route_filter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.secondaryAzurePort">secondary_azure_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix">secondary_peer_address_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.sharedKey">shared_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference">DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.expressRouteCircuitNameInput">express_route_circuit_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peeringTypeInput">peering_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.expressRouteCircuitName">express_route_circuit_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peeringType">peering_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `azure_asn`<sup>Required</sup> <a name="azure_asn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.azureAsn"></a>

```python
azure_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gateway_manager_etag`<sup>Required</sup> <a name="gateway_manager_etag" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.gatewayManagerEtag"></a>

```python
gateway_manager_etag: str
```

- *Type:* str

---

##### `ipv4_enabled`<sup>Required</sup> <a name="ipv4_enabled" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.ipv4Enabled"></a>

```python
ipv4_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `peer_asn`<sup>Required</sup> <a name="peer_asn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peerAsn"></a>

```python
peer_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `primary_azure_port`<sup>Required</sup> <a name="primary_azure_port" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.primaryAzurePort"></a>

```python
primary_azure_port: str
```

- *Type:* str

---

##### `primary_peer_address_prefix`<sup>Required</sup> <a name="primary_peer_address_prefix" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.primaryPeerAddressPrefix"></a>

```python
primary_peer_address_prefix: str
```

- *Type:* str

---

##### `route_filter_id`<sup>Required</sup> <a name="route_filter_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.routeFilterId"></a>

```python
route_filter_id: str
```

- *Type:* str

---

##### `secondary_azure_port`<sup>Required</sup> <a name="secondary_azure_port" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.secondaryAzurePort"></a>

```python
secondary_azure_port: str
```

- *Type:* str

---

##### `secondary_peer_address_prefix`<sup>Required</sup> <a name="secondary_peer_address_prefix" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.secondaryPeerAddressPrefix"></a>

```python
secondary_peer_address_prefix: str
```

- *Type:* str

---

##### `shared_key`<sup>Required</sup> <a name="shared_key" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.sharedKey"></a>

```python
shared_key: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.timeouts"></a>

```python
timeouts: DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference">DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference</a>

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.vlanId"></a>

```python
vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `express_route_circuit_name_input`<sup>Optional</sup> <a name="express_route_circuit_name_input" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.expressRouteCircuitNameInput"></a>

```python
express_route_circuit_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `peering_type_input`<sup>Optional</sup> <a name="peering_type_input" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peeringTypeInput"></a>

```python
peering_type_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermExpressRouteCircuitPeeringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>]

---

##### `express_route_circuit_name`<sup>Required</sup> <a name="express_route_circuit_name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.expressRouteCircuitName"></a>

```python
express_route_circuit_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `peering_type`<sup>Required</sup> <a name="peering_type" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.peeringType"></a>

```python
peering_type: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermExpressRouteCircuitPeeringConfig <a name="DataAzurermExpressRouteCircuitPeeringConfig" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit_peering

dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  express_route_circuit_name: str,
  peering_type: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermExpressRouteCircuitPeeringTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName">express_route_circuit_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#express_route_circuit_name DataAzurermExpressRouteCircuitPeering#express_route_circuit_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.peeringType">peering_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#peering_type DataAzurermExpressRouteCircuitPeering#peering_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#resource_group_name DataAzurermExpressRouteCircuitPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#id DataAzurermExpressRouteCircuitPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `express_route_circuit_name`<sup>Required</sup> <a name="express_route_circuit_name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.expressRouteCircuitName"></a>

```python
express_route_circuit_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#express_route_circuit_name DataAzurermExpressRouteCircuitPeering#express_route_circuit_name}.

---

##### `peering_type`<sup>Required</sup> <a name="peering_type" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.peeringType"></a>

```python
peering_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#peering_type DataAzurermExpressRouteCircuitPeering#peering_type}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#resource_group_name DataAzurermExpressRouteCircuitPeering#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#id DataAzurermExpressRouteCircuitPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringConfig.property.timeouts"></a>

```python
timeouts: DataAzurermExpressRouteCircuitPeeringTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#timeouts DataAzurermExpressRouteCircuitPeering#timeouts}

---

### DataAzurermExpressRouteCircuitPeeringTimeouts <a name="DataAzurermExpressRouteCircuitPeeringTimeouts" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit_peering

dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#read DataAzurermExpressRouteCircuitPeering#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/data-sources/express_route_circuit_peering#read DataAzurermExpressRouteCircuitPeering#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference <a name="DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_express_route_circuit_peering

dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermExpressRouteCircuitPeeringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermExpressRouteCircuitPeering.DataAzurermExpressRouteCircuitPeeringTimeouts">DataAzurermExpressRouteCircuitPeeringTimeouts</a>]

---



