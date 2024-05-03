# `networkInterface` Submodule <a name="`networkInterface` Submodule" id="@cdktf/provider-azurerm.networkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkInterface <a name="NetworkInterface" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface azurerm_network_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface

networkInterface.NetworkInterface(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_configuration: typing.Union[IResolvable, typing.List[NetworkInterfaceIpConfiguration]],
  location: str,
  name: str,
  resource_group_name: str,
  auxiliary_mode: str = None,
  auxiliary_sku: str = None,
  dns_servers: typing.List[str] = None,
  edge_zone: str = None,
  enable_accelerated_networking: typing.Union[bool, IResolvable] = None,
  enable_ip_forwarding: typing.Union[bool, IResolvable] = None,
  id: str = None,
  internal_dns_name_label: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: NetworkInterfaceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.ipConfiguration">ip_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration">NetworkInterfaceIpConfiguration</a>]]</code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#location NetworkInterface#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#name NetworkInterface#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#resource_group_name NetworkInterface#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.auxiliaryMode">auxiliary_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#auxiliary_mode NetworkInterface#auxiliary_mode}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.auxiliarySku">auxiliary_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#auxiliary_sku NetworkInterface#auxiliary_sku}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#dns_servers NetworkInterface#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.edgeZone">edge_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#edge_zone NetworkInterface#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.enableAcceleratedNetworking">enable_accelerated_networking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#enable_accelerated_networking NetworkInterface#enable_accelerated_networking}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.enableIpForwarding">enable_ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#enable_ip_forwarding NetworkInterface#enable_ip_forwarding}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#id NetworkInterface#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.internalDnsNameLabel">internal_dns_name_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#internal_dns_name_label NetworkInterface#internal_dns_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#tags NetworkInterface#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts">NetworkInterfaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.ipConfiguration"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration">NetworkInterfaceIpConfiguration</a>]]

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#ip_configuration NetworkInterface#ip_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#location NetworkInterface#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#name NetworkInterface#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#resource_group_name NetworkInterface#resource_group_name}.

---

##### `auxiliary_mode`<sup>Optional</sup> <a name="auxiliary_mode" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.auxiliaryMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#auxiliary_mode NetworkInterface#auxiliary_mode}.

---

##### `auxiliary_sku`<sup>Optional</sup> <a name="auxiliary_sku" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.auxiliarySku"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#auxiliary_sku NetworkInterface#auxiliary_sku}.

---

##### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.dnsServers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#dns_servers NetworkInterface#dns_servers}.

---

##### `edge_zone`<sup>Optional</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.edgeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#edge_zone NetworkInterface#edge_zone}.

---

##### `enable_accelerated_networking`<sup>Optional</sup> <a name="enable_accelerated_networking" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.enableAcceleratedNetworking"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#enable_accelerated_networking NetworkInterface#enable_accelerated_networking}.

---

##### `enable_ip_forwarding`<sup>Optional</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.enableIpForwarding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#enable_ip_forwarding NetworkInterface#enable_ip_forwarding}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#id NetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internal_dns_name_label`<sup>Optional</sup> <a name="internal_dns_name_label" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.internalDnsNameLabel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#internal_dns_name_label NetworkInterface#internal_dns_name_label}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#tags NetworkInterface#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts">NetworkInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#timeouts NetworkInterface#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.putIpConfiguration">put_ip_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetAuxiliaryMode">reset_auxiliary_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetAuxiliarySku">reset_auxiliary_sku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetDnsServers">reset_dns_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetEdgeZone">reset_edge_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetEnableAcceleratedNetworking">reset_enable_accelerated_networking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetEnableIpForwarding">reset_enable_ip_forwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetInternalDnsNameLabel">reset_internal_dns_name_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ip_configuration` <a name="put_ip_configuration" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.putIpConfiguration"></a>

```python
def put_ip_configuration(
  value: typing.Union[IResolvable, typing.List[NetworkInterfaceIpConfiguration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.putIpConfiguration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration">NetworkInterfaceIpConfiguration</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#create NetworkInterface#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#delete NetworkInterface#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#read NetworkInterface#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#update NetworkInterface#update}.

---

##### `reset_auxiliary_mode` <a name="reset_auxiliary_mode" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetAuxiliaryMode"></a>

```python
def reset_auxiliary_mode() -> None
```

##### `reset_auxiliary_sku` <a name="reset_auxiliary_sku" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetAuxiliarySku"></a>

```python
def reset_auxiliary_sku() -> None
```

##### `reset_dns_servers` <a name="reset_dns_servers" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetDnsServers"></a>

```python
def reset_dns_servers() -> None
```

##### `reset_edge_zone` <a name="reset_edge_zone" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetEdgeZone"></a>

```python
def reset_edge_zone() -> None
```

##### `reset_enable_accelerated_networking` <a name="reset_enable_accelerated_networking" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetEnableAcceleratedNetworking"></a>

```python
def reset_enable_accelerated_networking() -> None
```

##### `reset_enable_ip_forwarding` <a name="reset_enable_ip_forwarding" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetEnableIpForwarding"></a>

```python
def reset_enable_ip_forwarding() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_internal_dns_name_label` <a name="reset_internal_dns_name_label" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetInternalDnsNameLabel"></a>

```python
def reset_internal_dns_name_label() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkInterface resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface

networkInterface.NetworkInterface.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface

networkInterface.NetworkInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface

networkInterface.NetworkInterface.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface

networkInterface.NetworkInterface.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkInterface resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkInterface to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.appliedDnsServers">applied_dns_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.internalDomainNameSuffix">internal_domain_name_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.ipConfiguration">ip_configuration</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList">NetworkInterfaceIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.privateIpAddresses">private_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference">NetworkInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.virtualMachineId">virtual_machine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.auxiliaryModeInput">auxiliary_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.auxiliarySkuInput">auxiliary_sku_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.dnsServersInput">dns_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.edgeZoneInput">edge_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.enableAcceleratedNetworkingInput">enable_accelerated_networking_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.enableIpForwardingInput">enable_ip_forwarding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.internalDnsNameLabelInput">internal_dns_name_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.ipConfigurationInput">ip_configuration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration">NetworkInterfaceIpConfiguration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts">NetworkInterfaceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.auxiliaryMode">auxiliary_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.auxiliarySku">auxiliary_sku</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.edgeZone">edge_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.enableAcceleratedNetworking">enable_accelerated_networking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.enableIpForwarding">enable_ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.internalDnsNameLabel">internal_dns_name_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `applied_dns_servers`<sup>Required</sup> <a name="applied_dns_servers" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.appliedDnsServers"></a>

```python
applied_dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_domain_name_suffix`<sup>Required</sup> <a name="internal_domain_name_suffix" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.internalDomainNameSuffix"></a>

```python
internal_domain_name_suffix: str
```

- *Type:* str

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.ipConfiguration"></a>

```python
ip_configuration: NetworkInterfaceIpConfigurationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList">NetworkInterfaceIpConfigurationList</a>

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `private_ip_addresses`<sup>Required</sup> <a name="private_ip_addresses" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.privateIpAddresses"></a>

```python
private_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.timeouts"></a>

```python
timeouts: NetworkInterfaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference">NetworkInterfaceTimeoutsOutputReference</a>

---

##### `virtual_machine_id`<sup>Required</sup> <a name="virtual_machine_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.virtualMachineId"></a>

```python
virtual_machine_id: str
```

- *Type:* str

---

##### `auxiliary_mode_input`<sup>Optional</sup> <a name="auxiliary_mode_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.auxiliaryModeInput"></a>

```python
auxiliary_mode_input: str
```

- *Type:* str

---

##### `auxiliary_sku_input`<sup>Optional</sup> <a name="auxiliary_sku_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.auxiliarySkuInput"></a>

```python
auxiliary_sku_input: str
```

- *Type:* str

---

##### `dns_servers_input`<sup>Optional</sup> <a name="dns_servers_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.dnsServersInput"></a>

```python
dns_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `edge_zone_input`<sup>Optional</sup> <a name="edge_zone_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.edgeZoneInput"></a>

```python
edge_zone_input: str
```

- *Type:* str

---

##### `enable_accelerated_networking_input`<sup>Optional</sup> <a name="enable_accelerated_networking_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.enableAcceleratedNetworkingInput"></a>

```python
enable_accelerated_networking_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ip_forwarding_input`<sup>Optional</sup> <a name="enable_ip_forwarding_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.enableIpForwardingInput"></a>

```python
enable_ip_forwarding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internal_dns_name_label_input`<sup>Optional</sup> <a name="internal_dns_name_label_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.internalDnsNameLabelInput"></a>

```python
internal_dns_name_label_input: str
```

- *Type:* str

---

##### `ip_configuration_input`<sup>Optional</sup> <a name="ip_configuration_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.ipConfigurationInput"></a>

```python
ip_configuration_input: typing.Union[IResolvable, typing.List[NetworkInterfaceIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration">NetworkInterfaceIpConfiguration</a>]]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkInterfaceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts">NetworkInterfaceTimeouts</a>]

---

##### `auxiliary_mode`<sup>Required</sup> <a name="auxiliary_mode" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.auxiliaryMode"></a>

```python
auxiliary_mode: str
```

- *Type:* str

---

##### `auxiliary_sku`<sup>Required</sup> <a name="auxiliary_sku" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.auxiliarySku"></a>

```python
auxiliary_sku: str
```

- *Type:* str

---

##### `dns_servers`<sup>Required</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `edge_zone`<sup>Required</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.edgeZone"></a>

```python
edge_zone: str
```

- *Type:* str

---

##### `enable_accelerated_networking`<sup>Required</sup> <a name="enable_accelerated_networking" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.enableAcceleratedNetworking"></a>

```python
enable_accelerated_networking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_ip_forwarding`<sup>Required</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.enableIpForwarding"></a>

```python
enable_ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_dns_name_label`<sup>Required</sup> <a name="internal_dns_name_label" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.internalDnsNameLabel"></a>

```python
internal_dns_name_label: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.networkInterface.NetworkInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkInterfaceConfig <a name="NetworkInterfaceConfig" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface

networkInterface.NetworkInterfaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_configuration: typing.Union[IResolvable, typing.List[NetworkInterfaceIpConfiguration]],
  location: str,
  name: str,
  resource_group_name: str,
  auxiliary_mode: str = None,
  auxiliary_sku: str = None,
  dns_servers: typing.List[str] = None,
  edge_zone: str = None,
  enable_accelerated_networking: typing.Union[bool, IResolvable] = None,
  enable_ip_forwarding: typing.Union[bool, IResolvable] = None,
  id: str = None,
  internal_dns_name_label: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: NetworkInterfaceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.ipConfiguration">ip_configuration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration">NetworkInterfaceIpConfiguration</a>]]</code> | ip_configuration block. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#location NetworkInterface#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#name NetworkInterface#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#resource_group_name NetworkInterface#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.auxiliaryMode">auxiliary_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#auxiliary_mode NetworkInterface#auxiliary_mode}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.auxiliarySku">auxiliary_sku</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#auxiliary_sku NetworkInterface#auxiliary_sku}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.dnsServers">dns_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#dns_servers NetworkInterface#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.edgeZone">edge_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#edge_zone NetworkInterface#edge_zone}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.enableAcceleratedNetworking">enable_accelerated_networking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#enable_accelerated_networking NetworkInterface#enable_accelerated_networking}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.enableIpForwarding">enable_ip_forwarding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#enable_ip_forwarding NetworkInterface#enable_ip_forwarding}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#id NetworkInterface#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.internalDnsNameLabel">internal_dns_name_label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#internal_dns_name_label NetworkInterface#internal_dns_name_label}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#tags NetworkInterface#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts">NetworkInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_configuration`<sup>Required</sup> <a name="ip_configuration" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.ipConfiguration"></a>

```python
ip_configuration: typing.Union[IResolvable, typing.List[NetworkInterfaceIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration">NetworkInterfaceIpConfiguration</a>]]

ip_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#ip_configuration NetworkInterface#ip_configuration}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#location NetworkInterface#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#name NetworkInterface#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#resource_group_name NetworkInterface#resource_group_name}.

---

##### `auxiliary_mode`<sup>Optional</sup> <a name="auxiliary_mode" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.auxiliaryMode"></a>

```python
auxiliary_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#auxiliary_mode NetworkInterface#auxiliary_mode}.

---

##### `auxiliary_sku`<sup>Optional</sup> <a name="auxiliary_sku" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.auxiliarySku"></a>

```python
auxiliary_sku: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#auxiliary_sku NetworkInterface#auxiliary_sku}.

---

##### `dns_servers`<sup>Optional</sup> <a name="dns_servers" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.dnsServers"></a>

```python
dns_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#dns_servers NetworkInterface#dns_servers}.

---

##### `edge_zone`<sup>Optional</sup> <a name="edge_zone" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.edgeZone"></a>

```python
edge_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#edge_zone NetworkInterface#edge_zone}.

---

##### `enable_accelerated_networking`<sup>Optional</sup> <a name="enable_accelerated_networking" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.enableAcceleratedNetworking"></a>

```python
enable_accelerated_networking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#enable_accelerated_networking NetworkInterface#enable_accelerated_networking}.

---

##### `enable_ip_forwarding`<sup>Optional</sup> <a name="enable_ip_forwarding" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.enableIpForwarding"></a>

```python
enable_ip_forwarding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#enable_ip_forwarding NetworkInterface#enable_ip_forwarding}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#id NetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internal_dns_name_label`<sup>Optional</sup> <a name="internal_dns_name_label" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.internalDnsNameLabel"></a>

```python
internal_dns_name_label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#internal_dns_name_label NetworkInterface#internal_dns_name_label}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#tags NetworkInterface#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceConfig.property.timeouts"></a>

```python
timeouts: NetworkInterfaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts">NetworkInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#timeouts NetworkInterface#timeouts}

---

### NetworkInterfaceIpConfiguration <a name="NetworkInterfaceIpConfiguration" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface

networkInterface.NetworkInterfaceIpConfiguration(
  name: str,
  private_ip_address_allocation: str,
  gateway_load_balancer_frontend_ip_configuration_id: str = None,
  primary: typing.Union[bool, IResolvable] = None,
  private_ip_address: str = None,
  private_ip_address_version: str = None,
  public_ip_address_id: str = None,
  subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#name NetworkInterface#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.privateIpAddressAllocation">private_ip_address_allocation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#private_ip_address_allocation NetworkInterface#private_ip_address_allocation}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.gatewayLoadBalancerFrontendIpConfigurationId">gateway_load_balancer_frontend_ip_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#gateway_load_balancer_frontend_ip_configuration_id NetworkInterface#gateway_load_balancer_frontend_ip_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#primary NetworkInterface#primary}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#private_ip_address NetworkInterface#private_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.privateIpAddressVersion">private_ip_address_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#private_ip_address_version NetworkInterface#private_ip_address_version}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#public_ip_address_id NetworkInterface#public_ip_address_id}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#subnet_id NetworkInterface#subnet_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#name NetworkInterface#name}.

---

##### `private_ip_address_allocation`<sup>Required</sup> <a name="private_ip_address_allocation" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.privateIpAddressAllocation"></a>

```python
private_ip_address_allocation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#private_ip_address_allocation NetworkInterface#private_ip_address_allocation}.

---

##### `gateway_load_balancer_frontend_ip_configuration_id`<sup>Optional</sup> <a name="gateway_load_balancer_frontend_ip_configuration_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.gatewayLoadBalancerFrontendIpConfigurationId"></a>

```python
gateway_load_balancer_frontend_ip_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#gateway_load_balancer_frontend_ip_configuration_id NetworkInterface#gateway_load_balancer_frontend_ip_configuration_id}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#primary NetworkInterface#primary}.

---

##### `private_ip_address`<sup>Optional</sup> <a name="private_ip_address" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#private_ip_address NetworkInterface#private_ip_address}.

---

##### `private_ip_address_version`<sup>Optional</sup> <a name="private_ip_address_version" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.privateIpAddressVersion"></a>

```python
private_ip_address_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#private_ip_address_version NetworkInterface#private_ip_address_version}.

---

##### `public_ip_address_id`<sup>Optional</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#public_ip_address_id NetworkInterface#public_ip_address_id}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#subnet_id NetworkInterface#subnet_id}.

---

### NetworkInterfaceTimeouts <a name="NetworkInterfaceTimeouts" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface

networkInterface.NetworkInterfaceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#create NetworkInterface#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#delete NetworkInterface#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#read NetworkInterface#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#update NetworkInterface#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#create NetworkInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#delete NetworkInterface#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#read NetworkInterface#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/network_interface#update NetworkInterface#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkInterfaceIpConfigurationList <a name="NetworkInterfaceIpConfigurationList" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface

networkInterface.NetworkInterfaceIpConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkInterfaceIpConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration">NetworkInterfaceIpConfiguration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkInterfaceIpConfiguration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration">NetworkInterfaceIpConfiguration</a>]]

---


### NetworkInterfaceIpConfigurationOutputReference <a name="NetworkInterfaceIpConfigurationOutputReference" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface

networkInterface.NetworkInterfaceIpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resetGatewayLoadBalancerFrontendIpConfigurationId">reset_gateway_load_balancer_frontend_ip_configuration_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resetPrimary">reset_primary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resetPrivateIpAddress">reset_private_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resetPrivateIpAddressVersion">reset_private_ip_address_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resetPublicIpAddressId">reset_public_ip_address_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_gateway_load_balancer_frontend_ip_configuration_id` <a name="reset_gateway_load_balancer_frontend_ip_configuration_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resetGatewayLoadBalancerFrontendIpConfigurationId"></a>

```python
def reset_gateway_load_balancer_frontend_ip_configuration_id() -> None
```

##### `reset_primary` <a name="reset_primary" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resetPrimary"></a>

```python
def reset_primary() -> None
```

##### `reset_private_ip_address` <a name="reset_private_ip_address" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resetPrivateIpAddress"></a>

```python
def reset_private_ip_address() -> None
```

##### `reset_private_ip_address_version` <a name="reset_private_ip_address_version" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resetPrivateIpAddressVersion"></a>

```python
def reset_private_ip_address_version() -> None
```

##### `reset_public_ip_address_id` <a name="reset_public_ip_address_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resetPublicIpAddressId"></a>

```python
def reset_public_ip_address_id() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.gatewayLoadBalancerFrontendIpConfigurationIdInput">gateway_load_balancer_frontend_ip_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.primaryInput">primary_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressAllocationInput">private_ip_address_allocation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressInput">private_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressVersionInput">private_ip_address_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressIdInput">public_ip_address_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.gatewayLoadBalancerFrontendIpConfigurationId">gateway_load_balancer_frontend_ip_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.primary">primary</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressAllocation">private_ip_address_allocation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressVersion">private_ip_address_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressId">public_ip_address_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration">NetworkInterfaceIpConfiguration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gateway_load_balancer_frontend_ip_configuration_id_input`<sup>Optional</sup> <a name="gateway_load_balancer_frontend_ip_configuration_id_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.gatewayLoadBalancerFrontendIpConfigurationIdInput"></a>

```python
gateway_load_balancer_frontend_ip_configuration_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_input`<sup>Optional</sup> <a name="primary_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.primaryInput"></a>

```python
primary_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_ip_address_allocation_input`<sup>Optional</sup> <a name="private_ip_address_allocation_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressAllocationInput"></a>

```python
private_ip_address_allocation_input: str
```

- *Type:* str

---

##### `private_ip_address_input`<sup>Optional</sup> <a name="private_ip_address_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressInput"></a>

```python
private_ip_address_input: str
```

- *Type:* str

---

##### `private_ip_address_version_input`<sup>Optional</sup> <a name="private_ip_address_version_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressVersionInput"></a>

```python
private_ip_address_version_input: str
```

- *Type:* str

---

##### `public_ip_address_id_input`<sup>Optional</sup> <a name="public_ip_address_id_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressIdInput"></a>

```python
public_ip_address_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `gateway_load_balancer_frontend_ip_configuration_id`<sup>Required</sup> <a name="gateway_load_balancer_frontend_ip_configuration_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.gatewayLoadBalancerFrontendIpConfigurationId"></a>

```python
gateway_load_balancer_frontend_ip_configuration_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.primary"></a>

```python
primary: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `private_ip_address_allocation`<sup>Required</sup> <a name="private_ip_address_allocation" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressAllocation"></a>

```python
private_ip_address_allocation: str
```

- *Type:* str

---

##### `private_ip_address_version`<sup>Required</sup> <a name="private_ip_address_version" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressVersion"></a>

```python
private_ip_address_version: str
```

- *Type:* str

---

##### `public_ip_address_id`<sup>Required</sup> <a name="public_ip_address_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressId"></a>

```python
public_ip_address_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkInterfaceIpConfiguration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceIpConfiguration">NetworkInterfaceIpConfiguration</a>]

---


### NetworkInterfaceTimeoutsOutputReference <a name="NetworkInterfaceTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import network_interface

networkInterface.NetworkInterfaceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts">NetworkInterfaceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkInterfaceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.networkInterface.NetworkInterfaceTimeouts">NetworkInterfaceTimeouts</a>]

---



