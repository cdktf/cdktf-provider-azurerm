# `lbBackendAddressPoolAddress` Submodule <a name="`lbBackendAddressPoolAddress` Submodule" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbBackendAddressPoolAddress <a name="LbBackendAddressPoolAddress" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address azurerm_lb_backend_address_pool_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_backend_address_pool_address

lbBackendAddressPoolAddress.LbBackendAddressPoolAddress(
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
  name: str,
  backend_address_ip_configuration_id: str = None,
  id: str = None,
  ip_address: str = None,
  timeouts: LbBackendAddressPoolAddressTimeouts = None,
  virtual_network_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.backendAddressPoolId">backend_address_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#backend_address_pool_id LbBackendAddressPoolAddress#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#name LbBackendAddressPoolAddress#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.backendAddressIpConfigurationId">backend_address_ip_configuration_id</a></code> | <code>str</code> | For global load balancer, user needs to specify the `backend_address_ip_configuration_id` of the added regional load balancers. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#id LbBackendAddressPoolAddress#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#ip_address LbBackendAddressPoolAddress#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | For regional load balancer, user needs to specify `virtual_network_id` and `ip_address`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_address_pool_id`<sup>Required</sup> <a name="backend_address_pool_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.backendAddressPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#backend_address_pool_id LbBackendAddressPoolAddress#backend_address_pool_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#name LbBackendAddressPoolAddress#name}.

---

##### `backend_address_ip_configuration_id`<sup>Optional</sup> <a name="backend_address_ip_configuration_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.backendAddressIpConfigurationId"></a>

- *Type:* str

For global load balancer, user needs to specify the `backend_address_ip_configuration_id` of the added regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#backend_address_ip_configuration_id LbBackendAddressPoolAddress#backend_address_ip_configuration_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#id LbBackendAddressPoolAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.ipAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#ip_address LbBackendAddressPoolAddress#ip_address}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#timeouts LbBackendAddressPoolAddress#timeouts}

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.Initializer.parameter.virtualNetworkId"></a>

- *Type:* str

For regional load balancer, user needs to specify `virtual_network_id` and `ip_address`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#virtual_network_id LbBackendAddressPoolAddress#virtual_network_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetBackendAddressIpConfigurationId">reset_backend_address_ip_configuration_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetVirtualNetworkId">reset_virtual_network_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#create LbBackendAddressPoolAddress#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#delete LbBackendAddressPoolAddress#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#read LbBackendAddressPoolAddress#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#update LbBackendAddressPoolAddress#update}.

---

##### `reset_backend_address_ip_configuration_id` <a name="reset_backend_address_ip_configuration_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetBackendAddressIpConfigurationId"></a>

```python
def reset_backend_address_ip_configuration_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_virtual_network_id` <a name="reset_virtual_network_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.resetVirtualNetworkId"></a>

```python
def reset_virtual_network_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LbBackendAddressPoolAddress resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_backend_address_pool_address

lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_backend_address_pool_address

lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_backend_address_pool_address

lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_backend_address_pool_address

lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LbBackendAddressPoolAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LbBackendAddressPoolAddress to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LbBackendAddressPoolAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbBackendAddressPoolAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.inboundNatRulePortMapping">inbound_nat_rule_port_mapping</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList">LbBackendAddressPoolAddressInboundNatRulePortMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference">LbBackendAddressPoolAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationIdInput">backend_address_ip_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolIdInput">backend_address_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationId">backend_address_ip_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolId">backend_address_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `inbound_nat_rule_port_mapping`<sup>Required</sup> <a name="inbound_nat_rule_port_mapping" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.inboundNatRulePortMapping"></a>

```python
inbound_nat_rule_port_mapping: LbBackendAddressPoolAddressInboundNatRulePortMappingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList">LbBackendAddressPoolAddressInboundNatRulePortMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeouts"></a>

```python
timeouts: LbBackendAddressPoolAddressTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference">LbBackendAddressPoolAddressTimeoutsOutputReference</a>

---

##### `backend_address_ip_configuration_id_input`<sup>Optional</sup> <a name="backend_address_ip_configuration_id_input" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationIdInput"></a>

```python
backend_address_ip_configuration_id_input: str
```

- *Type:* str

---

##### `backend_address_pool_id_input`<sup>Optional</sup> <a name="backend_address_pool_id_input" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolIdInput"></a>

```python
backend_address_pool_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, LbBackendAddressPoolAddressTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>]

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `backend_address_ip_configuration_id`<sup>Required</sup> <a name="backend_address_ip_configuration_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressIpConfigurationId"></a>

```python
backend_address_ip_configuration_id: str
```

- *Type:* str

---

##### `backend_address_pool_id`<sup>Required</sup> <a name="backend_address_pool_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.backendAddressPoolId"></a>

```python
backend_address_pool_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddress.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbBackendAddressPoolAddressConfig <a name="LbBackendAddressPoolAddressConfig" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_backend_address_pool_address

lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_address_pool_id: str,
  name: str,
  backend_address_ip_configuration_id: str = None,
  id: str = None,
  ip_address: str = None,
  timeouts: LbBackendAddressPoolAddressTimeouts = None,
  virtual_network_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressPoolId">backend_address_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#backend_address_pool_id LbBackendAddressPoolAddress#backend_address_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#name LbBackendAddressPoolAddress#name}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressIpConfigurationId">backend_address_ip_configuration_id</a></code> | <code>str</code> | For global load balancer, user needs to specify the `backend_address_ip_configuration_id` of the added regional load balancers. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#id LbBackendAddressPoolAddress#id}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#ip_address LbBackendAddressPoolAddress#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | For regional load balancer, user needs to specify `virtual_network_id` and `ip_address`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_address_pool_id`<sup>Required</sup> <a name="backend_address_pool_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressPoolId"></a>

```python
backend_address_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#backend_address_pool_id LbBackendAddressPoolAddress#backend_address_pool_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#name LbBackendAddressPoolAddress#name}.

---

##### `backend_address_ip_configuration_id`<sup>Optional</sup> <a name="backend_address_ip_configuration_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.backendAddressIpConfigurationId"></a>

```python
backend_address_ip_configuration_id: str
```

- *Type:* str

For global load balancer, user needs to specify the `backend_address_ip_configuration_id` of the added regional load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#backend_address_ip_configuration_id LbBackendAddressPoolAddress#backend_address_ip_configuration_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#id LbBackendAddressPoolAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#ip_address LbBackendAddressPoolAddress#ip_address}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.timeouts"></a>

```python
timeouts: LbBackendAddressPoolAddressTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#timeouts LbBackendAddressPoolAddress#timeouts}

---

##### `virtual_network_id`<sup>Optional</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressConfig.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

For regional load balancer, user needs to specify `virtual_network_id` and `ip_address`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#virtual_network_id LbBackendAddressPoolAddress#virtual_network_id}

---

### LbBackendAddressPoolAddressInboundNatRulePortMapping <a name="LbBackendAddressPoolAddressInboundNatRulePortMapping" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_backend_address_pool_address

lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping()
```


### LbBackendAddressPoolAddressTimeouts <a name="LbBackendAddressPoolAddressTimeouts" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_backend_address_pool_address

lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#create LbBackendAddressPoolAddress#create}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#delete LbBackendAddressPoolAddress#delete}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#read LbBackendAddressPoolAddress#read}. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#update LbBackendAddressPoolAddress#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#create LbBackendAddressPoolAddress#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#delete LbBackendAddressPoolAddress#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#read LbBackendAddressPoolAddress#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/lb_backend_address_pool_address#update LbBackendAddressPoolAddress#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbBackendAddressPoolAddressInboundNatRulePortMappingList <a name="LbBackendAddressPoolAddressInboundNatRulePortMappingList" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_backend_address_pool_address

lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference <a name="LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_backend_address_pool_address

lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.backendPort">backend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.frontendPort">frontend_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName">inbound_nat_rule_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping">LbBackendAddressPoolAddressInboundNatRulePortMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backend_port`<sup>Required</sup> <a name="backend_port" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.backendPort"></a>

```python
backend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `frontend_port`<sup>Required</sup> <a name="frontend_port" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.frontendPort"></a>

```python
frontend_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `inbound_nat_rule_name`<sup>Required</sup> <a name="inbound_nat_rule_name" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.inboundNatRuleName"></a>

```python
inbound_nat_rule_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMappingOutputReference.property.internalValue"></a>

```python
internal_value: LbBackendAddressPoolAddressInboundNatRulePortMapping
```

- *Type:* <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressInboundNatRulePortMapping">LbBackendAddressPoolAddressInboundNatRulePortMapping</a>

---


### LbBackendAddressPoolAddressTimeoutsOutputReference <a name="LbBackendAddressPoolAddressTimeoutsOutputReference" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import lb_backend_address_pool_address

lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, LbBackendAddressPoolAddressTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.lbBackendAddressPoolAddress.LbBackendAddressPoolAddressTimeouts">LbBackendAddressPoolAddressTimeouts</a>]

---



