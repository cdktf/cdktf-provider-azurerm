# `stackHciLogicalNetwork` Submodule <a name="`stackHciLogicalNetwork` Submodule" id="@cdktf/provider-azurerm.stackHciLogicalNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackHciLogicalNetwork <a name="StackHciLogicalNetwork" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network azurerm_stack_hci_logical_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetwork(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_location_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  subnet: StackHciLogicalNetworkSubnet,
  virtual_switch_name: str,
  dns_servers: typing.List[str] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: StackHciLogicalNetworkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.customLocationId">custom_location_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#custom_location_id StackHciLogicalNetwork#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#location StackHciLogicalNetwork#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#resource_group_name StackHciLogicalNetwork#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.virtualSwitchName">virtual_switch_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#virtual_switch_name StackHciLogicalNetwork#virtual_switch_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#dns_servers StackHciLogicalNetwork#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#id StackHciLogicalNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#tags StackHciLogicalNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.customLocationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#custom_location_id StackHciLogicalNetwork#custom_location_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#location StackHciLogicalNetwork#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#resource_group_name StackHciLogicalNetwork#resource_group_name}.

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.subnet"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#subnet StackHciLogicalNetwork#subnet}

---

##### `virtual_switch_name`<sup>Required</sup> <a name="virtual_switch_name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.virtualSwitchName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#virtual_switch_name StackHciLogicalNetwork#virtual_switch_name}.

---

##### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.dnsServers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#dns_servers StackHciLogicalNetwork#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#id StackHciLogicalNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#tags StackHciLogicalNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#timeouts StackHciLogicalNetwork#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putSubnet">put_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetDnsServers">reset_dns_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_subnet` <a name="put_subnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putSubnet"></a>

```python
def put_subnet(
  ip_allocation_method: str,
  address_prefix: str = None,
  ip_pool: typing.Union[IResolvable, typing.List[StackHciLogicalNetworkSubnetIpPool]] = None,
  route: StackHciLogicalNetworkSubnetRoute = None,
  vlan_id: typing.Union[int, float] = None
) -> None
```

###### `ip_allocation_method`<sup>Required</sup> <a name="ip_allocation_method" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putSubnet.parameter.ipAllocationMethod"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#ip_allocation_method StackHciLogicalNetwork#ip_allocation_method}.

---

###### `address_prefix`<sup>Optional</sup> <a name="address_prefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putSubnet.parameter.addressPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}.

---

###### `ip_pool`<sup>Optional</sup> <a name="ip_pool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putSubnet.parameter.ipPool"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>]]

ip_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#ip_pool StackHciLogicalNetwork#ip_pool}

---

###### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putSubnet.parameter.route"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a>

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#route StackHciLogicalNetwork#route}

---

###### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putSubnet.parameter.vlanId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#vlan_id StackHciLogicalNetwork#vlan_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#create StackHciLogicalNetwork#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#delete StackHciLogicalNetwork#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#read StackHciLogicalNetwork#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#update StackHciLogicalNetwork#update}.

---

##### `reset_dns_servers` <a name="reset_dns_servers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetDnsServers"></a>

```python
def reset_dns_servers() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StackHciLogicalNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetwork.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetwork.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetwork.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetwork.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StackHciLogicalNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StackHciLogicalNetwork to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StackHciLogicalNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackHciLogicalNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference">StackHciLogicalNetworkSubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference">StackHciLogicalNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.customLocationIdInput">custom_location_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dnsServersInput">dns_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.subnetInput">subnet_input</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.virtualSwitchNameInput">virtual_switch_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.customLocationId">custom_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.virtualSwitchName">virtual_switch_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.subnet"></a>

```python
subnet: StackHciLogicalNetworkSubnetOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference">StackHciLogicalNetworkSubnetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.timeouts"></a>

```python
timeouts: StackHciLogicalNetworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference">StackHciLogicalNetworkTimeoutsOutputReference</a>

---

##### `custom_location_id_input`<sup>Optional</sup> <a name="custom_location_id_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.customLocationIdInput"></a>

```python
custom_location_id_input: str
```

- *Type:* str

---

##### `dns_servers_input`<sup>Optional</sup> <a name="dns_servers_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dnsServersInput"></a>

```python
dns_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.subnetInput"></a>

```python
subnet_input: StackHciLogicalNetworkSubnet
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StackHciLogicalNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>]

---

##### `virtual_switch_name_input`<sup>Optional</sup> <a name="virtual_switch_name_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.virtualSwitchNameInput"></a>

```python
virtual_switch_name_input: str
```

- *Type:* str

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.customLocationId"></a>

```python
custom_location_id: str
```

- *Type:* str

---

##### `dns_servers`<sup>Required</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_switch_name`<sup>Required</sup> <a name="virtual_switch_name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.virtualSwitchName"></a>

```python
virtual_switch_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetwork.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StackHciLogicalNetworkConfig <a name="StackHciLogicalNetworkConfig" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetworkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_location_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  subnet: StackHciLogicalNetworkSubnet,
  virtual_switch_name: str,
  dns_servers: typing.List[str] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: StackHciLogicalNetworkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.customLocationId">custom_location_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#custom_location_id StackHciLogicalNetwork#custom_location_id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#location StackHciLogicalNetwork#location}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#resource_group_name StackHciLogicalNetwork#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.virtualSwitchName">virtual_switch_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#virtual_switch_name StackHciLogicalNetwork#virtual_switch_name}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#dns_servers StackHciLogicalNetwork#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#id StackHciLogicalNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#tags StackHciLogicalNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_location_id`<sup>Required</sup> <a name="custom_location_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.customLocationId"></a>

```python
custom_location_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#custom_location_id StackHciLogicalNetwork#custom_location_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#location StackHciLogicalNetwork#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#resource_group_name StackHciLogicalNetwork#resource_group_name}.

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.subnet"></a>

```python
subnet: StackHciLogicalNetworkSubnet
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#subnet StackHciLogicalNetwork#subnet}

---

##### `virtual_switch_name`<sup>Required</sup> <a name="virtual_switch_name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.virtualSwitchName"></a>

```python
virtual_switch_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#virtual_switch_name StackHciLogicalNetwork#virtual_switch_name}.

---

##### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#dns_servers StackHciLogicalNetwork#dns_servers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#id StackHciLogicalNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#tags StackHciLogicalNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkConfig.property.timeouts"></a>

```python
timeouts: StackHciLogicalNetworkTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#timeouts StackHciLogicalNetwork#timeouts}

---

### StackHciLogicalNetworkSubnet <a name="StackHciLogicalNetworkSubnet" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetworkSubnet(
  ip_allocation_method: str,
  address_prefix: str = None,
  ip_pool: typing.Union[IResolvable, typing.List[StackHciLogicalNetworkSubnetIpPool]] = None,
  route: StackHciLogicalNetworkSubnetRoute = None,
  vlan_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.ipAllocationMethod">ip_allocation_method</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#ip_allocation_method StackHciLogicalNetwork#ip_allocation_method}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.addressPrefix">address_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.ipPool">ip_pool</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>]]</code> | ip_pool block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a></code> | route block. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#vlan_id StackHciLogicalNetwork#vlan_id}. |

---

##### `ip_allocation_method`<sup>Required</sup> <a name="ip_allocation_method" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.ipAllocationMethod"></a>

```python
ip_allocation_method: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#ip_allocation_method StackHciLogicalNetwork#ip_allocation_method}.

---

##### `address_prefix`<sup>Optional</sup> <a name="address_prefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.addressPrefix"></a>

```python
address_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}.

---

##### `ip_pool`<sup>Optional</sup> <a name="ip_pool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.ipPool"></a>

```python
ip_pool: typing.Union[IResolvable, typing.List[StackHciLogicalNetworkSubnetIpPool]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>]]

ip_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#ip_pool StackHciLogicalNetwork#ip_pool}

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.route"></a>

```python
route: StackHciLogicalNetworkSubnetRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a>

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#route StackHciLogicalNetwork#route}

---

##### `vlan_id`<sup>Optional</sup> <a name="vlan_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet.property.vlanId"></a>

```python
vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#vlan_id StackHciLogicalNetwork#vlan_id}.

---

### StackHciLogicalNetworkSubnetIpPool <a name="StackHciLogicalNetworkSubnetIpPool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool(
  end: str,
  start: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.property.end">end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#end StackHciLogicalNetwork#end}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#start StackHciLogicalNetwork#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.property.end"></a>

```python
end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#end StackHciLogicalNetwork#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#start StackHciLogicalNetwork#start}.

---

### StackHciLogicalNetworkSubnetRoute <a name="StackHciLogicalNetworkSubnetRoute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute(
  address_prefix: str,
  next_hop_ip_address: str,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.addressPrefix">address_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.nextHopIpAddress">next_hop_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#next_hop_ip_address StackHciLogicalNetwork#next_hop_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}. |

---

##### `address_prefix`<sup>Required</sup> <a name="address_prefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.addressPrefix"></a>

```python
address_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}.

---

##### `next_hop_ip_address`<sup>Required</sup> <a name="next_hop_ip_address" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.nextHopIpAddress"></a>

```python
next_hop_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#next_hop_ip_address StackHciLogicalNetwork#next_hop_ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}.

---

### StackHciLogicalNetworkTimeouts <a name="StackHciLogicalNetworkTimeouts" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#create StackHciLogicalNetwork#create}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#delete StackHciLogicalNetwork#delete}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#read StackHciLogicalNetwork#read}. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#update StackHciLogicalNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#create StackHciLogicalNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#delete StackHciLogicalNetwork#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#read StackHciLogicalNetwork#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#update StackHciLogicalNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackHciLogicalNetworkSubnetIpPoolList <a name="StackHciLogicalNetworkSubnetIpPoolList" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackHciLogicalNetworkSubnetIpPoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[StackHciLogicalNetworkSubnetIpPool]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>]]

---


### StackHciLogicalNetworkSubnetIpPoolOutputReference <a name="StackHciLogicalNetworkSubnetIpPoolOutputReference" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.endInput">end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.end">end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_input`<sup>Optional</sup> <a name="end_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.endInput"></a>

```python
end_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.end"></a>

```python
end: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackHciLogicalNetworkSubnetIpPool]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>]

---


### StackHciLogicalNetworkSubnetOutputReference <a name="StackHciLogicalNetworkSubnetOutputReference" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putIpPool">put_ip_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putRoute">put_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetAddressPrefix">reset_address_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetIpPool">reset_ip_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetRoute">reset_route</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetVlanId">reset_vlan_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ip_pool` <a name="put_ip_pool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putIpPool"></a>

```python
def put_ip_pool(
  value: typing.Union[IResolvable, typing.List[StackHciLogicalNetworkSubnetIpPool]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putIpPool.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>]]

---

##### `put_route` <a name="put_route" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putRoute"></a>

```python
def put_route(
  address_prefix: str,
  next_hop_ip_address: str,
  name: str = None
) -> None
```

###### `address_prefix`<sup>Required</sup> <a name="address_prefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putRoute.parameter.addressPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#address_prefix StackHciLogicalNetwork#address_prefix}.

---

###### `next_hop_ip_address`<sup>Required</sup> <a name="next_hop_ip_address" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putRoute.parameter.nextHopIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#next_hop_ip_address StackHciLogicalNetwork#next_hop_ip_address}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.putRoute.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/stack_hci_logical_network#name StackHciLogicalNetwork#name}.

---

##### `reset_address_prefix` <a name="reset_address_prefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetAddressPrefix"></a>

```python
def reset_address_prefix() -> None
```

##### `reset_ip_pool` <a name="reset_ip_pool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetIpPool"></a>

```python
def reset_ip_pool() -> None
```

##### `reset_route` <a name="reset_route" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetRoute"></a>

```python
def reset_route() -> None
```

##### `reset_vlan_id` <a name="reset_vlan_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.resetVlanId"></a>

```python
def reset_vlan_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipPool">ip_pool</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList">StackHciLogicalNetworkSubnetIpPoolList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference">StackHciLogicalNetworkSubnetRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.addressPrefixInput">address_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipAllocationMethodInput">ip_allocation_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipPoolInput">ip_pool_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.routeInput">route_input</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.vlanIdInput">vlan_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.addressPrefix">address_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipAllocationMethod">ip_allocation_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.vlanId">vlan_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_pool`<sup>Required</sup> <a name="ip_pool" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipPool"></a>

```python
ip_pool: StackHciLogicalNetworkSubnetIpPoolList
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPoolList">StackHciLogicalNetworkSubnetIpPoolList</a>

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.route"></a>

```python
route: StackHciLogicalNetworkSubnetRouteOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference">StackHciLogicalNetworkSubnetRouteOutputReference</a>

---

##### `address_prefix_input`<sup>Optional</sup> <a name="address_prefix_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.addressPrefixInput"></a>

```python
address_prefix_input: str
```

- *Type:* str

---

##### `ip_allocation_method_input`<sup>Optional</sup> <a name="ip_allocation_method_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipAllocationMethodInput"></a>

```python
ip_allocation_method_input: str
```

- *Type:* str

---

##### `ip_pool_input`<sup>Optional</sup> <a name="ip_pool_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipPoolInput"></a>

```python
ip_pool_input: typing.Union[IResolvable, typing.List[StackHciLogicalNetworkSubnetIpPool]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetIpPool">StackHciLogicalNetworkSubnetIpPool</a>]]

---

##### `route_input`<sup>Optional</sup> <a name="route_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.routeInput"></a>

```python
route_input: StackHciLogicalNetworkSubnetRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a>

---

##### `vlan_id_input`<sup>Optional</sup> <a name="vlan_id_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.vlanIdInput"></a>

```python
vlan_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `address_prefix`<sup>Required</sup> <a name="address_prefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.addressPrefix"></a>

```python
address_prefix: str
```

- *Type:* str

---

##### `ip_allocation_method`<sup>Required</sup> <a name="ip_allocation_method" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.ipAllocationMethod"></a>

```python
ip_allocation_method: str
```

- *Type:* str

---

##### `vlan_id`<sup>Required</sup> <a name="vlan_id" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.vlanId"></a>

```python
vlan_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetOutputReference.property.internalValue"></a>

```python
internal_value: StackHciLogicalNetworkSubnet
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnet">StackHciLogicalNetworkSubnet</a>

---


### StackHciLogicalNetworkSubnetRouteOutputReference <a name="StackHciLogicalNetworkSubnetRouteOutputReference" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.addressPrefixInput">address_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nextHopIpAddressInput">next_hop_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.addressPrefix">address_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nextHopIpAddress">next_hop_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_prefix_input`<sup>Optional</sup> <a name="address_prefix_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.addressPrefixInput"></a>

```python
address_prefix_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `next_hop_ip_address_input`<sup>Optional</sup> <a name="next_hop_ip_address_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nextHopIpAddressInput"></a>

```python
next_hop_ip_address_input: str
```

- *Type:* str

---

##### `address_prefix`<sup>Required</sup> <a name="address_prefix" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.addressPrefix"></a>

```python
address_prefix: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `next_hop_ip_address`<sup>Required</sup> <a name="next_hop_ip_address" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.nextHopIpAddress"></a>

```python
next_hop_ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRouteOutputReference.property.internalValue"></a>

```python
internal_value: StackHciLogicalNetworkSubnetRoute
```

- *Type:* <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkSubnetRoute">StackHciLogicalNetworkSubnetRoute</a>

---


### StackHciLogicalNetworkTimeoutsOutputReference <a name="StackHciLogicalNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import stack_hci_logical_network

stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackHciLogicalNetworkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.stackHciLogicalNetwork.StackHciLogicalNetworkTimeouts">StackHciLogicalNetworkTimeouts</a>]

---



