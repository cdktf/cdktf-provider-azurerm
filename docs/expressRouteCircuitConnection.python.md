# `azurerm_express_route_circuit_connection`

Refer to the Terraform Registory for docs: [`azurerm_express_route_circuit_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection).

# `expressRouteCircuitConnection` Submodule <a name="`expressRouteCircuitConnection` Submodule" id="@cdktf/provider-azurerm.expressRouteCircuitConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRouteCircuitConnection <a name="ExpressRouteCircuitConnection" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection azurerm_express_route_circuit_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_connection

expressRouteCircuitConnection.ExpressRouteCircuitConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_prefix_ipv4: str,
  name: str,
  peering_id: str,
  peer_peering_id: str,
  address_prefix_ipv6: str = None,
  authorization_key: str = None,
  id: str = None,
  timeouts: ExpressRouteCircuitConnectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.addressPrefixIpv4">address_prefix_ipv4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#address_prefix_ipv4 ExpressRouteCircuitConnection#address_prefix_ipv4}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#name ExpressRouteCircuitConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.peeringId">peering_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#peering_id ExpressRouteCircuitConnection#peering_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.peerPeeringId">peer_peering_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#peer_peering_id ExpressRouteCircuitConnection#peer_peering_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.addressPrefixIpv6">address_prefix_ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#address_prefix_ipv6 ExpressRouteCircuitConnection#address_prefix_ipv6}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.authorizationKey">authorization_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#authorization_key ExpressRouteCircuitConnection#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#id ExpressRouteCircuitConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_prefix_ipv4`<sup>Required</sup> <a name="address_prefix_ipv4" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.addressPrefixIpv4"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#address_prefix_ipv4 ExpressRouteCircuitConnection#address_prefix_ipv4}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#name ExpressRouteCircuitConnection#name}.

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.peeringId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#peering_id ExpressRouteCircuitConnection#peering_id}.

---

##### `peer_peering_id`<sup>Required</sup> <a name="peer_peering_id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.peerPeeringId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#peer_peering_id ExpressRouteCircuitConnection#peer_peering_id}.

---

##### `address_prefix_ipv6`<sup>Optional</sup> <a name="address_prefix_ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.addressPrefixIpv6"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#address_prefix_ipv6 ExpressRouteCircuitConnection#address_prefix_ipv6}.

---

##### `authorization_key`<sup>Optional</sup> <a name="authorization_key" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.authorizationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#authorization_key ExpressRouteCircuitConnection#authorization_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#id ExpressRouteCircuitConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#timeouts ExpressRouteCircuitConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetAddressPrefixIpv6">reset_address_prefix_ipv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetAuthorizationKey">reset_authorization_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#create ExpressRouteCircuitConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#delete ExpressRouteCircuitConnection#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#read ExpressRouteCircuitConnection#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#update ExpressRouteCircuitConnection#update}.

---

##### `reset_address_prefix_ipv6` <a name="reset_address_prefix_ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetAddressPrefixIpv6"></a>

```python
def reset_address_prefix_ipv6() -> None
```

##### `reset_authorization_key` <a name="reset_authorization_key" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetAuthorizationKey"></a>

```python
def reset_authorization_key() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_connection

expressRouteCircuitConnection.ExpressRouteCircuitConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_connection

expressRouteCircuitConnection.ExpressRouteCircuitConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_connection

expressRouteCircuitConnection.ExpressRouteCircuitConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference">ExpressRouteCircuitConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv4Input">address_prefix_ipv4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv6Input">address_prefix_ipv6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.authorizationKeyInput">authorization_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peeringIdInput">peering_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peerPeeringIdInput">peer_peering_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv4">address_prefix_ipv4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv6">address_prefix_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.authorizationKey">authorization_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peeringId">peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peerPeeringId">peer_peering_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.timeouts"></a>

```python
timeouts: ExpressRouteCircuitConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference">ExpressRouteCircuitConnectionTimeoutsOutputReference</a>

---

##### `address_prefix_ipv4_input`<sup>Optional</sup> <a name="address_prefix_ipv4_input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv4Input"></a>

```python
address_prefix_ipv4_input: str
```

- *Type:* str

---

##### `address_prefix_ipv6_input`<sup>Optional</sup> <a name="address_prefix_ipv6_input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv6Input"></a>

```python
address_prefix_ipv6_input: str
```

- *Type:* str

---

##### `authorization_key_input`<sup>Optional</sup> <a name="authorization_key_input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.authorizationKeyInput"></a>

```python
authorization_key_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `peering_id_input`<sup>Optional</sup> <a name="peering_id_input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peeringIdInput"></a>

```python
peering_id_input: str
```

- *Type:* str

---

##### `peer_peering_id_input`<sup>Optional</sup> <a name="peer_peering_id_input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peerPeeringIdInput"></a>

```python
peer_peering_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ExpressRouteCircuitConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a>]

---

##### `address_prefix_ipv4`<sup>Required</sup> <a name="address_prefix_ipv4" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv4"></a>

```python
address_prefix_ipv4: str
```

- *Type:* str

---

##### `address_prefix_ipv6`<sup>Required</sup> <a name="address_prefix_ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.addressPrefixIpv6"></a>

```python
address_prefix_ipv6: str
```

- *Type:* str

---

##### `authorization_key`<sup>Required</sup> <a name="authorization_key" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.authorizationKey"></a>

```python
authorization_key: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peeringId"></a>

```python
peering_id: str
```

- *Type:* str

---

##### `peer_peering_id`<sup>Required</sup> <a name="peer_peering_id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.peerPeeringId"></a>

```python
peer_peering_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRouteCircuitConnectionConfig <a name="ExpressRouteCircuitConnectionConfig" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_connection

expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  address_prefix_ipv4: str,
  name: str,
  peering_id: str,
  peer_peering_id: str,
  address_prefix_ipv6: str = None,
  authorization_key: str = None,
  id: str = None,
  timeouts: ExpressRouteCircuitConnectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.addressPrefixIpv4">address_prefix_ipv4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#address_prefix_ipv4 ExpressRouteCircuitConnection#address_prefix_ipv4}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#name ExpressRouteCircuitConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.peeringId">peering_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#peering_id ExpressRouteCircuitConnection#peering_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.peerPeeringId">peer_peering_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#peer_peering_id ExpressRouteCircuitConnection#peer_peering_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.addressPrefixIpv6">address_prefix_ipv6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#address_prefix_ipv6 ExpressRouteCircuitConnection#address_prefix_ipv6}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.authorizationKey">authorization_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#authorization_key ExpressRouteCircuitConnection#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#id ExpressRouteCircuitConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `address_prefix_ipv4`<sup>Required</sup> <a name="address_prefix_ipv4" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.addressPrefixIpv4"></a>

```python
address_prefix_ipv4: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#address_prefix_ipv4 ExpressRouteCircuitConnection#address_prefix_ipv4}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#name ExpressRouteCircuitConnection#name}.

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.peeringId"></a>

```python
peering_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#peering_id ExpressRouteCircuitConnection#peering_id}.

---

##### `peer_peering_id`<sup>Required</sup> <a name="peer_peering_id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.peerPeeringId"></a>

```python
peer_peering_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#peer_peering_id ExpressRouteCircuitConnection#peer_peering_id}.

---

##### `address_prefix_ipv6`<sup>Optional</sup> <a name="address_prefix_ipv6" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.addressPrefixIpv6"></a>

```python
address_prefix_ipv6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#address_prefix_ipv6 ExpressRouteCircuitConnection#address_prefix_ipv6}.

---

##### `authorization_key`<sup>Optional</sup> <a name="authorization_key" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.authorizationKey"></a>

```python
authorization_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#authorization_key ExpressRouteCircuitConnection#authorization_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#id ExpressRouteCircuitConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionConfig.property.timeouts"></a>

```python
timeouts: ExpressRouteCircuitConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#timeouts ExpressRouteCircuitConnection#timeouts}

---

### ExpressRouteCircuitConnectionTimeouts <a name="ExpressRouteCircuitConnectionTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_connection

expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#create ExpressRouteCircuitConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#delete ExpressRouteCircuitConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#read ExpressRouteCircuitConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#update ExpressRouteCircuitConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#create ExpressRouteCircuitConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#delete ExpressRouteCircuitConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#read ExpressRouteCircuitConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/express_route_circuit_connection#update ExpressRouteCircuitConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRouteCircuitConnectionTimeoutsOutputReference <a name="ExpressRouteCircuitConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import express_route_circuit_connection

expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ExpressRouteCircuitConnectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.expressRouteCircuitConnection.ExpressRouteCircuitConnectionTimeouts">ExpressRouteCircuitConnectionTimeouts</a>]

---



