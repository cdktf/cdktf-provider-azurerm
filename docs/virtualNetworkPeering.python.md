# `azurerm_virtual_network_peering`

Refer to the Terraform Registory for docs: [`azurerm_virtual_network_peering`](https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering).

# `virtualNetworkPeering` Submodule <a name="`virtualNetworkPeering` Submodule" id="@cdktf/provider-azurerm.virtualNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualNetworkPeering <a name="VirtualNetworkPeering" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering azurerm_virtual_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_peering

virtualNetworkPeering.VirtualNetworkPeering(
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
  remote_virtual_network_id: str,
  resource_group_name: str,
  virtual_network_name: str,
  allow_forwarded_traffic: typing.Union[bool, IResolvable] = None,
  allow_gateway_transit: typing.Union[bool, IResolvable] = None,
  allow_virtual_network_access: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: VirtualNetworkPeeringTimeouts = None,
  triggers: typing.Mapping[str] = None,
  use_remote_gateways: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#name VirtualNetworkPeering#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.remoteVirtualNetworkId">remote_virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#remote_virtual_network_id VirtualNetworkPeering#remote_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#resource_group_name VirtualNetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.virtualNetworkName">virtual_network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#virtual_network_name VirtualNetworkPeering#virtual_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.allowForwardedTraffic">allow_forwarded_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#allow_forwarded_traffic VirtualNetworkPeering#allow_forwarded_traffic}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.allowGatewayTransit">allow_gateway_transit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#allow_gateway_transit VirtualNetworkPeering#allow_gateway_transit}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.allowVirtualNetworkAccess">allow_virtual_network_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#allow_virtual_network_access VirtualNetworkPeering#allow_virtual_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#id VirtualNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts">VirtualNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#triggers VirtualNetworkPeering#triggers}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.useRemoteGateways">use_remote_gateways</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#use_remote_gateways VirtualNetworkPeering#use_remote_gateways}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#name VirtualNetworkPeering#name}.

---

##### `remote_virtual_network_id`<sup>Required</sup> <a name="remote_virtual_network_id" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.remoteVirtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#remote_virtual_network_id VirtualNetworkPeering#remote_virtual_network_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#resource_group_name VirtualNetworkPeering#resource_group_name}.

---

##### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.virtualNetworkName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#virtual_network_name VirtualNetworkPeering#virtual_network_name}.

---

##### `allow_forwarded_traffic`<sup>Optional</sup> <a name="allow_forwarded_traffic" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.allowForwardedTraffic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#allow_forwarded_traffic VirtualNetworkPeering#allow_forwarded_traffic}.

---

##### `allow_gateway_transit`<sup>Optional</sup> <a name="allow_gateway_transit" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.allowGatewayTransit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#allow_gateway_transit VirtualNetworkPeering#allow_gateway_transit}.

---

##### `allow_virtual_network_access`<sup>Optional</sup> <a name="allow_virtual_network_access" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.allowVirtualNetworkAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#allow_virtual_network_access VirtualNetworkPeering#allow_virtual_network_access}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#id VirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts">VirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#timeouts VirtualNetworkPeering#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.triggers"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#triggers VirtualNetworkPeering#triggers}.

---

##### `use_remote_gateways`<sup>Optional</sup> <a name="use_remote_gateways" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.Initializer.parameter.useRemoteGateways"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#use_remote_gateways VirtualNetworkPeering#use_remote_gateways}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetAllowForwardedTraffic">reset_allow_forwarded_traffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetAllowGatewayTransit">reset_allow_gateway_transit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetAllowVirtualNetworkAccess">reset_allow_virtual_network_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetTriggers">reset_triggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetUseRemoteGateways">reset_use_remote_gateways</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#create VirtualNetworkPeering#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#delete VirtualNetworkPeering#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#read VirtualNetworkPeering#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#update VirtualNetworkPeering#update}.

---

##### `reset_allow_forwarded_traffic` <a name="reset_allow_forwarded_traffic" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetAllowForwardedTraffic"></a>

```python
def reset_allow_forwarded_traffic() -> None
```

##### `reset_allow_gateway_transit` <a name="reset_allow_gateway_transit" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetAllowGatewayTransit"></a>

```python
def reset_allow_gateway_transit() -> None
```

##### `reset_allow_virtual_network_access` <a name="reset_allow_virtual_network_access" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetAllowVirtualNetworkAccess"></a>

```python
def reset_allow_virtual_network_access() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetTriggers"></a>

```python
def reset_triggers() -> None
```

##### `reset_use_remote_gateways` <a name="reset_use_remote_gateways" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.resetUseRemoteGateways"></a>

```python
def reset_use_remote_gateways() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_peering

virtualNetworkPeering.VirtualNetworkPeering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_peering

virtualNetworkPeering.VirtualNetworkPeering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_peering

virtualNetworkPeering.VirtualNetworkPeering.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference">VirtualNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.allowForwardedTrafficInput">allow_forwarded_traffic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.allowGatewayTransitInput">allow_gateway_transit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.allowVirtualNetworkAccessInput">allow_virtual_network_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.remoteVirtualNetworkIdInput">remote_virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts">VirtualNetworkPeeringTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.triggersInput">triggers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.useRemoteGatewaysInput">use_remote_gateways_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.virtualNetworkNameInput">virtual_network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.allowForwardedTraffic">allow_forwarded_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.allowGatewayTransit">allow_gateway_transit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.allowVirtualNetworkAccess">allow_virtual_network_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.remoteVirtualNetworkId">remote_virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.useRemoteGateways">use_remote_gateways</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.virtualNetworkName">virtual_network_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.timeouts"></a>

```python
timeouts: VirtualNetworkPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference">VirtualNetworkPeeringTimeoutsOutputReference</a>

---

##### `allow_forwarded_traffic_input`<sup>Optional</sup> <a name="allow_forwarded_traffic_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.allowForwardedTrafficInput"></a>

```python
allow_forwarded_traffic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_gateway_transit_input`<sup>Optional</sup> <a name="allow_gateway_transit_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.allowGatewayTransitInput"></a>

```python
allow_gateway_transit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_virtual_network_access_input`<sup>Optional</sup> <a name="allow_virtual_network_access_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.allowVirtualNetworkAccessInput"></a>

```python
allow_virtual_network_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `remote_virtual_network_id_input`<sup>Optional</sup> <a name="remote_virtual_network_id_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.remoteVirtualNetworkIdInput"></a>

```python
remote_virtual_network_id_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualNetworkPeeringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts">VirtualNetworkPeeringTimeouts</a>]

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.triggersInput"></a>

```python
triggers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_remote_gateways_input`<sup>Optional</sup> <a name="use_remote_gateways_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.useRemoteGatewaysInput"></a>

```python
use_remote_gateways_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_network_name_input`<sup>Optional</sup> <a name="virtual_network_name_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.virtualNetworkNameInput"></a>

```python
virtual_network_name_input: str
```

- *Type:* str

---

##### `allow_forwarded_traffic`<sup>Required</sup> <a name="allow_forwarded_traffic" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.allowForwardedTraffic"></a>

```python
allow_forwarded_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_gateway_transit`<sup>Required</sup> <a name="allow_gateway_transit" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.allowGatewayTransit"></a>

```python
allow_gateway_transit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_virtual_network_access`<sup>Required</sup> <a name="allow_virtual_network_access" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.allowVirtualNetworkAccess"></a>

```python
allow_virtual_network_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `remote_virtual_network_id`<sup>Required</sup> <a name="remote_virtual_network_id" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.remoteVirtualNetworkId"></a>

```python
remote_virtual_network_id: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `use_remote_gateways`<sup>Required</sup> <a name="use_remote_gateways" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.useRemoteGateways"></a>

```python
use_remote_gateways: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.virtualNetworkName"></a>

```python
virtual_network_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualNetworkPeeringConfig <a name="VirtualNetworkPeeringConfig" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_peering

virtualNetworkPeering.VirtualNetworkPeeringConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  remote_virtual_network_id: str,
  resource_group_name: str,
  virtual_network_name: str,
  allow_forwarded_traffic: typing.Union[bool, IResolvable] = None,
  allow_gateway_transit: typing.Union[bool, IResolvable] = None,
  allow_virtual_network_access: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: VirtualNetworkPeeringTimeouts = None,
  triggers: typing.Mapping[str] = None,
  use_remote_gateways: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#name VirtualNetworkPeering#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.remoteVirtualNetworkId">remote_virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#remote_virtual_network_id VirtualNetworkPeering#remote_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#resource_group_name VirtualNetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.virtualNetworkName">virtual_network_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#virtual_network_name VirtualNetworkPeering#virtual_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.allowForwardedTraffic">allow_forwarded_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#allow_forwarded_traffic VirtualNetworkPeering#allow_forwarded_traffic}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.allowGatewayTransit">allow_gateway_transit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#allow_gateway_transit VirtualNetworkPeering#allow_gateway_transit}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess">allow_virtual_network_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#allow_virtual_network_access VirtualNetworkPeering#allow_virtual_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#id VirtualNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts">VirtualNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#triggers VirtualNetworkPeering#triggers}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.useRemoteGateways">use_remote_gateways</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#use_remote_gateways VirtualNetworkPeering#use_remote_gateways}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#name VirtualNetworkPeering#name}.

---

##### `remote_virtual_network_id`<sup>Required</sup> <a name="remote_virtual_network_id" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.remoteVirtualNetworkId"></a>

```python
remote_virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#remote_virtual_network_id VirtualNetworkPeering#remote_virtual_network_id}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#resource_group_name VirtualNetworkPeering#resource_group_name}.

---

##### `virtual_network_name`<sup>Required</sup> <a name="virtual_network_name" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.virtualNetworkName"></a>

```python
virtual_network_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#virtual_network_name VirtualNetworkPeering#virtual_network_name}.

---

##### `allow_forwarded_traffic`<sup>Optional</sup> <a name="allow_forwarded_traffic" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.allowForwardedTraffic"></a>

```python
allow_forwarded_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#allow_forwarded_traffic VirtualNetworkPeering#allow_forwarded_traffic}.

---

##### `allow_gateway_transit`<sup>Optional</sup> <a name="allow_gateway_transit" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.allowGatewayTransit"></a>

```python
allow_gateway_transit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#allow_gateway_transit VirtualNetworkPeering#allow_gateway_transit}.

---

##### `allow_virtual_network_access`<sup>Optional</sup> <a name="allow_virtual_network_access" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess"></a>

```python
allow_virtual_network_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#allow_virtual_network_access VirtualNetworkPeering#allow_virtual_network_access}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#id VirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.timeouts"></a>

```python
timeouts: VirtualNetworkPeeringTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts">VirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#timeouts VirtualNetworkPeering#timeouts}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#triggers VirtualNetworkPeering#triggers}.

---

##### `use_remote_gateways`<sup>Optional</sup> <a name="use_remote_gateways" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringConfig.property.useRemoteGateways"></a>

```python
use_remote_gateways: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#use_remote_gateways VirtualNetworkPeering#use_remote_gateways}.

---

### VirtualNetworkPeeringTimeouts <a name="VirtualNetworkPeeringTimeouts" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_peering

virtualNetworkPeering.VirtualNetworkPeeringTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#create VirtualNetworkPeering#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#delete VirtualNetworkPeering#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#read VirtualNetworkPeering#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#update VirtualNetworkPeering#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#create VirtualNetworkPeering#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#delete VirtualNetworkPeering#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#read VirtualNetworkPeering#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.70.0/docs/resources/virtual_network_peering#update VirtualNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualNetworkPeeringTimeoutsOutputReference <a name="VirtualNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_peering

virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts">VirtualNetworkPeeringTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualNetworkPeeringTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkPeering.VirtualNetworkPeeringTimeouts">VirtualNetworkPeeringTimeouts</a>]

---



