# `networkInterfaceApplicationGatewayBackendAddressPoolAssociation` Submodule <a name="`networkInterfaceApplicationGatewayBackendAddressPoolAssociation` Submodule" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation <a name="NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association azurerm_network_interface_application_gateway_backend_address_pool_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_gateway_backend_address_pool_association

networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_address_pool_id: str,
  ip_configuration_name: str,
  network_interface_id: str,
  id: str = None,
  timeouts: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.backendAddressPoolId">backend_address_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#backend_address_pool_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.ipConfigurationName">ip_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#ip_configuration_name NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#network_interface_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_address_pool_id`<sup>Required</sup> <a name="backend_address_pool_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.backendAddressPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#backend_address_pool_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#backend_address_pool_id}.

---

##### `ip_configuration_name`<sup>Required</sup> <a name="ip_configuration_name" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.ipConfigurationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#ip_configuration_name NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#ip_configuration_name}.

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.networkInterfaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#network_interface_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#network_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#timeouts NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#create NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#delete NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#read NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_gateway_backend_address_pool_association

networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_gateway_backend_address_pool_association

networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_gateway_backend_address_pool_association

networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_gateway_backend_address_pool_association

networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.backendAddressPoolIdInput">backend_address_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.ipConfigurationNameInput">ip_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.networkInterfaceIdInput">network_interface_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.backendAddressPoolId">backend_address_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.ipConfigurationName">ip_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.timeouts"></a>

```python
timeouts: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference</a>

---

##### `backend_address_pool_id_input`<sup>Optional</sup> <a name="backend_address_pool_id_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.backendAddressPoolIdInput"></a>

```python
backend_address_pool_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_configuration_name_input`<sup>Optional</sup> <a name="ip_configuration_name_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.ipConfigurationNameInput"></a>

```python
ip_configuration_name_input: str
```

- *Type:* str

---

##### `network_interface_id_input`<sup>Optional</sup> <a name="network_interface_id_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.networkInterfaceIdInput"></a>

```python
network_interface_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a>]

---

##### `backend_address_pool_id`<sup>Required</sup> <a name="backend_address_pool_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.backendAddressPoolId"></a>

```python
backend_address_pool_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_configuration_name`<sup>Required</sup> <a name="ip_configuration_name" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.ipConfigurationName"></a>

```python
ip_configuration_name: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig <a name="NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_gateway_backend_address_pool_association

networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_address_pool_id: str,
  ip_configuration_name: str,
  network_interface_id: str,
  id: str = None,
  timeouts: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.backendAddressPoolId">backend_address_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#backend_address_pool_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.ipConfigurationName">ip_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#ip_configuration_name NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#network_interface_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#network_interface_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_address_pool_id`<sup>Required</sup> <a name="backend_address_pool_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.backendAddressPoolId"></a>

```python
backend_address_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#backend_address_pool_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#backend_address_pool_id}.

---

##### `ip_configuration_name`<sup>Required</sup> <a name="ip_configuration_name" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.ipConfigurationName"></a>

```python
ip_configuration_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#ip_configuration_name NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#ip_configuration_name}.

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#network_interface_id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#network_interface_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#id NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationConfig.property.timeouts"></a>

```python
timeouts: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#timeouts NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#timeouts}

---

### NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts <a name="NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_gateway_backend_address_pool_association

networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#create NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#delete NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#read NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#create NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#delete NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.21.1/docs/resources/network_interface_application_gateway_backend_address_pool_association#read NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference <a name="NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface_application_gateway_backend_address_pool_association

networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterfaceApplicationGatewayBackendAddressPoolAssociation.NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts">NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationTimeouts</a>]

---



