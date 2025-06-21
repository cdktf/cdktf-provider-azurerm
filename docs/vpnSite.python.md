# `vpnSite` Submodule <a name="`vpnSite` Submodule" id="@cdktf/provider-azurerm.vpnSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnSite <a name="VpnSite" id="@cdktf/provider-azurerm.vpnSite.VpnSite"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site azurerm_vpn_site}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSite(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  virtual_wan_id: str,
  address_cidrs: typing.List[str] = None,
  device_model: str = None,
  device_vendor: str = None,
  id: str = None,
  link: typing.Union[IResolvable, typing.List[VpnSiteLink]] = None,
  o365_policy: VpnSiteO365Policy = None,
  tags: typing.Mapping[str] = None,
  timeouts: VpnSiteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#location VpnSite#location}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#name VpnSite#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#resource_group_name VpnSite#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.virtualWanId">virtual_wan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#virtual_wan_id VpnSite#virtual_wan_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.addressCidrs">address_cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#address_cidrs VpnSite#address_cidrs}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.deviceModel">device_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#device_model VpnSite#device_model}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.deviceVendor">device_vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#device_vendor VpnSite#device_vendor}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#id VpnSite#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.link">link</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>]]</code> | link block. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.o365Policy">o365_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a></code> | o365_policy block. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#tags VpnSite#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#location VpnSite#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#name VpnSite#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#resource_group_name VpnSite#resource_group_name}.

---

##### `virtual_wan_id`<sup>Required</sup> <a name="virtual_wan_id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.virtualWanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#virtual_wan_id VpnSite#virtual_wan_id}.

---

##### `address_cidrs`<sup>Optional</sup> <a name="address_cidrs" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.addressCidrs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#address_cidrs VpnSite#address_cidrs}.

---

##### `device_model`<sup>Optional</sup> <a name="device_model" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.deviceModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#device_model VpnSite#device_model}.

---

##### `device_vendor`<sup>Optional</sup> <a name="device_vendor" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.deviceVendor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#device_vendor VpnSite#device_vendor}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#id VpnSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.link"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>]]

link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#link VpnSite#link}

---

##### `o365_policy`<sup>Optional</sup> <a name="o365_policy" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.o365Policy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a>

o365_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#o365_policy VpnSite#o365_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#tags VpnSite#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnSite.VpnSite.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#timeouts VpnSite#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.putLink">put_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.putO365Policy">put_o365_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.resetAddressCidrs">reset_address_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.resetDeviceModel">reset_device_model</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.resetDeviceVendor">reset_device_vendor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.resetLink">reset_link</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.resetO365Policy">reset_o365_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnSite.VpnSite.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.vpnSite.VpnSite.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vpnSite.VpnSite.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnSite.VpnSite.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.vpnSite.VpnSite.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.vpnSite.VpnSite.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.vpnSite.VpnSite.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.vpnSite.VpnSite.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.vpnSite.VpnSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.vpnSite.VpnSite.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.vpnSite.VpnSite.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnSite.VpnSite.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.vpnSite.VpnSite.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.vpnSite.VpnSite.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.vpnSite.VpnSite.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_link` <a name="put_link" id="@cdktf/provider-azurerm.vpnSite.VpnSite.putLink"></a>

```python
def put_link(
  value: typing.Union[IResolvable, typing.List[VpnSiteLink]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnSite.VpnSite.putLink.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>]]

---

##### `put_o365_policy` <a name="put_o365_policy" id="@cdktf/provider-azurerm.vpnSite.VpnSite.putO365Policy"></a>

```python
def put_o365_policy(
  traffic_category: VpnSiteO365PolicyTrafficCategory = None
) -> None
```

###### `traffic_category`<sup>Optional</sup> <a name="traffic_category" id="@cdktf/provider-azurerm.vpnSite.VpnSite.putO365Policy.parameter.trafficCategory"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a>

traffic_category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#traffic_category VpnSite#traffic_category}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.vpnSite.VpnSite.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vpnSite.VpnSite.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#create VpnSite#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnSite.VpnSite.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#delete VpnSite#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vpnSite.VpnSite.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#read VpnSite#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vpnSite.VpnSite.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#update VpnSite#update}.

---

##### `reset_address_cidrs` <a name="reset_address_cidrs" id="@cdktf/provider-azurerm.vpnSite.VpnSite.resetAddressCidrs"></a>

```python
def reset_address_cidrs() -> None
```

##### `reset_device_model` <a name="reset_device_model" id="@cdktf/provider-azurerm.vpnSite.VpnSite.resetDeviceModel"></a>

```python
def reset_device_model() -> None
```

##### `reset_device_vendor` <a name="reset_device_vendor" id="@cdktf/provider-azurerm.vpnSite.VpnSite.resetDeviceVendor"></a>

```python
def reset_device_vendor() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_link` <a name="reset_link" id="@cdktf/provider-azurerm.vpnSite.VpnSite.resetLink"></a>

```python
def reset_link() -> None
```

##### `reset_o365_policy` <a name="reset_o365_policy" id="@cdktf/provider-azurerm.vpnSite.VpnSite.resetO365Policy"></a>

```python
def reset_o365_policy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.vpnSite.VpnSite.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.vpnSite.VpnSite.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VpnSite resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.vpnSite.VpnSite.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSite.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnSite.VpnSite.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.vpnSite.VpnSite.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSite.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnSite.VpnSite.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.vpnSite.VpnSite.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSite.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnSite.VpnSite.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.vpnSite.VpnSite.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSite.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VpnSite resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnSite.VpnSite.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VpnSite to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VpnSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnSite.VpnSite.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpnSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.link">link</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList">VpnSiteLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.o365Policy">o365_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference">VpnSiteO365PolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference">VpnSiteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.addressCidrsInput">address_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.deviceModelInput">device_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.deviceVendorInput">device_vendor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.linkInput">link_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.o365PolicyInput">o365_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.virtualWanIdInput">virtual_wan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.addressCidrs">address_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.deviceModel">device_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.deviceVendor">device_vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.virtualWanId">virtual_wan_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.link"></a>

```python
link: VpnSiteLinkList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList">VpnSiteLinkList</a>

---

##### `o365_policy`<sup>Required</sup> <a name="o365_policy" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.o365Policy"></a>

```python
o365_policy: VpnSiteO365PolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference">VpnSiteO365PolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.timeouts"></a>

```python
timeouts: VpnSiteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference">VpnSiteTimeoutsOutputReference</a>

---

##### `address_cidrs_input`<sup>Optional</sup> <a name="address_cidrs_input" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.addressCidrsInput"></a>

```python
address_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_model_input`<sup>Optional</sup> <a name="device_model_input" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.deviceModelInput"></a>

```python
device_model_input: str
```

- *Type:* str

---

##### `device_vendor_input`<sup>Optional</sup> <a name="device_vendor_input" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.deviceVendorInput"></a>

```python
device_vendor_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `link_input`<sup>Optional</sup> <a name="link_input" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.linkInput"></a>

```python
link_input: typing.Union[IResolvable, typing.List[VpnSiteLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>]]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `o365_policy_input`<sup>Optional</sup> <a name="o365_policy_input" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.o365PolicyInput"></a>

```python
o365_policy_input: VpnSiteO365Policy
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VpnSiteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a>]

---

##### `virtual_wan_id_input`<sup>Optional</sup> <a name="virtual_wan_id_input" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.virtualWanIdInput"></a>

```python
virtual_wan_id_input: str
```

- *Type:* str

---

##### `address_cidrs`<sup>Required</sup> <a name="address_cidrs" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.addressCidrs"></a>

```python
address_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `device_model`<sup>Required</sup> <a name="device_model" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.deviceModel"></a>

```python
device_model: str
```

- *Type:* str

---

##### `device_vendor`<sup>Required</sup> <a name="device_vendor" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.deviceVendor"></a>

```python
device_vendor: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_wan_id`<sup>Required</sup> <a name="virtual_wan_id" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.virtualWanId"></a>

```python
virtual_wan_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSite.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.vpnSite.VpnSite.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpnSiteConfig <a name="VpnSiteConfig" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSiteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  virtual_wan_id: str,
  address_cidrs: typing.List[str] = None,
  device_model: str = None,
  device_vendor: str = None,
  id: str = None,
  link: typing.Union[IResolvable, typing.List[VpnSiteLink]] = None,
  o365_policy: VpnSiteO365Policy = None,
  tags: typing.Mapping[str] = None,
  timeouts: VpnSiteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#location VpnSite#location}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#name VpnSite#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#resource_group_name VpnSite#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.virtualWanId">virtual_wan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#virtual_wan_id VpnSite#virtual_wan_id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.addressCidrs">address_cidrs</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#address_cidrs VpnSite#address_cidrs}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.deviceModel">device_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#device_model VpnSite#device_model}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.deviceVendor">device_vendor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#device_vendor VpnSite#device_vendor}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#id VpnSite#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.link">link</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>]]</code> | link block. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.o365Policy">o365_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a></code> | o365_policy block. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#tags VpnSite#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#location VpnSite#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#name VpnSite#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#resource_group_name VpnSite#resource_group_name}.

---

##### `virtual_wan_id`<sup>Required</sup> <a name="virtual_wan_id" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.virtualWanId"></a>

```python
virtual_wan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#virtual_wan_id VpnSite#virtual_wan_id}.

---

##### `address_cidrs`<sup>Optional</sup> <a name="address_cidrs" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.addressCidrs"></a>

```python
address_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#address_cidrs VpnSite#address_cidrs}.

---

##### `device_model`<sup>Optional</sup> <a name="device_model" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.deviceModel"></a>

```python
device_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#device_model VpnSite#device_model}.

---

##### `device_vendor`<sup>Optional</sup> <a name="device_vendor" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.deviceVendor"></a>

```python
device_vendor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#device_vendor VpnSite#device_vendor}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#id VpnSite#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.link"></a>

```python
link: typing.Union[IResolvable, typing.List[VpnSiteLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>]]

link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#link VpnSite#link}

---

##### `o365_policy`<sup>Optional</sup> <a name="o365_policy" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.o365Policy"></a>

```python
o365_policy: VpnSiteO365Policy
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a>

o365_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#o365_policy VpnSite#o365_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#tags VpnSite#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnSite.VpnSiteConfig.property.timeouts"></a>

```python
timeouts: VpnSiteTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#timeouts VpnSite#timeouts}

---

### VpnSiteLink <a name="VpnSiteLink" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLink.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSiteLink(
  name: str,
  bgp: VpnSiteLinkBgp = None,
  fqdn: str = None,
  ip_address: str = None,
  provider_name: str = None,
  speed_in_mbps: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#name VpnSite#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgp">VpnSiteLinkBgp</a></code> | bgp block. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink.property.fqdn">fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#fqdn VpnSite#fqdn}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#ip_address VpnSite#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#provider_name VpnSite#provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink.property.speedInMbps">speed_in_mbps</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#speed_in_mbps VpnSite#speed_in_mbps}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLink.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#name VpnSite#name}.

---

##### `bgp`<sup>Optional</sup> <a name="bgp" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLink.property.bgp"></a>

```python
bgp: VpnSiteLinkBgp
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgp">VpnSiteLinkBgp</a>

bgp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#bgp VpnSite#bgp}

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLink.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#fqdn VpnSite#fqdn}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLink.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#ip_address VpnSite#ip_address}.

---

##### `provider_name`<sup>Optional</sup> <a name="provider_name" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLink.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#provider_name VpnSite#provider_name}.

---

##### `speed_in_mbps`<sup>Optional</sup> <a name="speed_in_mbps" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLink.property.speedInMbps"></a>

```python
speed_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#speed_in_mbps VpnSite#speed_in_mbps}.

---

### VpnSiteLinkBgp <a name="VpnSiteLinkBgp" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgp.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSiteLinkBgp(
  asn: typing.Union[int, float],
  peering_address: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgp.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#asn VpnSite#asn}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgp.property.peeringAddress">peering_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#peering_address VpnSite#peering_address}. |

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgp.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#asn VpnSite#asn}.

---

##### `peering_address`<sup>Required</sup> <a name="peering_address" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgp.property.peeringAddress"></a>

```python
peering_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#peering_address VpnSite#peering_address}.

---

### VpnSiteO365Policy <a name="VpnSiteO365Policy" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365Policy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365Policy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSiteO365Policy(
  traffic_category: VpnSiteO365PolicyTrafficCategory = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365Policy.property.trafficCategory">traffic_category</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a></code> | traffic_category block. |

---

##### `traffic_category`<sup>Optional</sup> <a name="traffic_category" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365Policy.property.trafficCategory"></a>

```python
traffic_category: VpnSiteO365PolicyTrafficCategory
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a>

traffic_category block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#traffic_category VpnSite#traffic_category}

---

### VpnSiteO365PolicyTrafficCategory <a name="VpnSiteO365PolicyTrafficCategory" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSiteO365PolicyTrafficCategory(
  allow_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  default_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  optimize_endpoint_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.property.allowEndpointEnabled">allow_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#allow_endpoint_enabled VpnSite#allow_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.property.defaultEndpointEnabled">default_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#default_endpoint_enabled VpnSite#default_endpoint_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.property.optimizeEndpointEnabled">optimize_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#optimize_endpoint_enabled VpnSite#optimize_endpoint_enabled}. |

---

##### `allow_endpoint_enabled`<sup>Optional</sup> <a name="allow_endpoint_enabled" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.property.allowEndpointEnabled"></a>

```python
allow_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#allow_endpoint_enabled VpnSite#allow_endpoint_enabled}.

---

##### `default_endpoint_enabled`<sup>Optional</sup> <a name="default_endpoint_enabled" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.property.defaultEndpointEnabled"></a>

```python
default_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#default_endpoint_enabled VpnSite#default_endpoint_enabled}.

---

##### `optimize_endpoint_enabled`<sup>Optional</sup> <a name="optimize_endpoint_enabled" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory.property.optimizeEndpointEnabled"></a>

```python
optimize_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#optimize_endpoint_enabled VpnSite#optimize_endpoint_enabled}.

---

### VpnSiteTimeouts <a name="VpnSiteTimeouts" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSiteTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#create VpnSite#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#delete VpnSite#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#read VpnSite#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#update VpnSite#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#create VpnSite#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#delete VpnSite#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#read VpnSite#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#update VpnSite#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnSiteLinkBgpOutputReference <a name="VpnSiteLinkBgpOutputReference" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSiteLinkBgpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.asnInput">asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.peeringAddressInput">peering_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.peeringAddress">peering_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgp">VpnSiteLinkBgp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asn_input`<sup>Optional</sup> <a name="asn_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.asnInput"></a>

```python
asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peering_address_input`<sup>Optional</sup> <a name="peering_address_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.peeringAddressInput"></a>

```python
peering_address_input: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peering_address`<sup>Required</sup> <a name="peering_address" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.peeringAddress"></a>

```python
peering_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference.property.internalValue"></a>

```python
internal_value: VpnSiteLinkBgp
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgp">VpnSiteLinkBgp</a>

---


### VpnSiteLinkList <a name="VpnSiteLinkList" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSiteLinkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnSiteLinkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnSiteLink]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>]]

---


### VpnSiteLinkOutputReference <a name="VpnSiteLinkOutputReference" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSiteLinkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.putBgp">put_bgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetBgp">reset_bgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetFqdn">reset_fqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetProviderName">reset_provider_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetSpeedInMbps">reset_speed_in_mbps</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bgp` <a name="put_bgp" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.putBgp"></a>

```python
def put_bgp(
  asn: typing.Union[int, float],
  peering_address: str
) -> None
```

###### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.putBgp.parameter.asn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#asn VpnSite#asn}.

---

###### `peering_address`<sup>Required</sup> <a name="peering_address" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.putBgp.parameter.peeringAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#peering_address VpnSite#peering_address}.

---

##### `reset_bgp` <a name="reset_bgp" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetBgp"></a>

```python
def reset_bgp() -> None
```

##### `reset_fqdn` <a name="reset_fqdn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetFqdn"></a>

```python
def reset_fqdn() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_provider_name` <a name="reset_provider_name" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetProviderName"></a>

```python
def reset_provider_name() -> None
```

##### `reset_speed_in_mbps` <a name="reset_speed_in_mbps" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.resetSpeedInMbps"></a>

```python
def reset_speed_in_mbps() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.bgp">bgp</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference">VpnSiteLinkBgpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.bgpInput">bgp_input</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgp">VpnSiteLinkBgp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.speedInMbpsInput">speed_in_mbps_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.speedInMbps">speed_in_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bgp`<sup>Required</sup> <a name="bgp" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.bgp"></a>

```python
bgp: VpnSiteLinkBgpOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgpOutputReference">VpnSiteLinkBgpOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `bgp_input`<sup>Optional</sup> <a name="bgp_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.bgpInput"></a>

```python
bgp_input: VpnSiteLinkBgp
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLinkBgp">VpnSiteLinkBgp</a>

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `speed_in_mbps_input`<sup>Optional</sup> <a name="speed_in_mbps_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.speedInMbpsInput"></a>

```python
speed_in_mbps_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `speed_in_mbps`<sup>Required</sup> <a name="speed_in_mbps" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.speedInMbps"></a>

```python
speed_in_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnSite.VpnSiteLinkOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnSiteLink]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteLink">VpnSiteLink</a>]

---


### VpnSiteO365PolicyOutputReference <a name="VpnSiteO365PolicyOutputReference" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSiteO365PolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.putTrafficCategory">put_traffic_category</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.resetTrafficCategory">reset_traffic_category</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_traffic_category` <a name="put_traffic_category" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.putTrafficCategory"></a>

```python
def put_traffic_category(
  allow_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  default_endpoint_enabled: typing.Union[bool, IResolvable] = None,
  optimize_endpoint_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allow_endpoint_enabled`<sup>Optional</sup> <a name="allow_endpoint_enabled" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.putTrafficCategory.parameter.allowEndpointEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#allow_endpoint_enabled VpnSite#allow_endpoint_enabled}.

---

###### `default_endpoint_enabled`<sup>Optional</sup> <a name="default_endpoint_enabled" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.putTrafficCategory.parameter.defaultEndpointEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#default_endpoint_enabled VpnSite#default_endpoint_enabled}.

---

###### `optimize_endpoint_enabled`<sup>Optional</sup> <a name="optimize_endpoint_enabled" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.putTrafficCategory.parameter.optimizeEndpointEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/vpn_site#optimize_endpoint_enabled VpnSite#optimize_endpoint_enabled}.

---

##### `reset_traffic_category` <a name="reset_traffic_category" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.resetTrafficCategory"></a>

```python
def reset_traffic_category() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.trafficCategory">traffic_category</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference">VpnSiteO365PolicyTrafficCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.trafficCategoryInput">traffic_category_input</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `traffic_category`<sup>Required</sup> <a name="traffic_category" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.trafficCategory"></a>

```python
traffic_category: VpnSiteO365PolicyTrafficCategoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference">VpnSiteO365PolicyTrafficCategoryOutputReference</a>

---

##### `traffic_category_input`<sup>Optional</sup> <a name="traffic_category_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.trafficCategoryInput"></a>

```python
traffic_category_input: VpnSiteO365PolicyTrafficCategory
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyOutputReference.property.internalValue"></a>

```python
internal_value: VpnSiteO365Policy
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365Policy">VpnSiteO365Policy</a>

---


### VpnSiteO365PolicyTrafficCategoryOutputReference <a name="VpnSiteO365PolicyTrafficCategoryOutputReference" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resetAllowEndpointEnabled">reset_allow_endpoint_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resetDefaultEndpointEnabled">reset_default_endpoint_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resetOptimizeEndpointEnabled">reset_optimize_endpoint_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_endpoint_enabled` <a name="reset_allow_endpoint_enabled" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resetAllowEndpointEnabled"></a>

```python
def reset_allow_endpoint_enabled() -> None
```

##### `reset_default_endpoint_enabled` <a name="reset_default_endpoint_enabled" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resetDefaultEndpointEnabled"></a>

```python
def reset_default_endpoint_enabled() -> None
```

##### `reset_optimize_endpoint_enabled` <a name="reset_optimize_endpoint_enabled" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.resetOptimizeEndpointEnabled"></a>

```python
def reset_optimize_endpoint_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.allowEndpointEnabledInput">allow_endpoint_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.defaultEndpointEnabledInput">default_endpoint_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.optimizeEndpointEnabledInput">optimize_endpoint_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.allowEndpointEnabled">allow_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.defaultEndpointEnabled">default_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.optimizeEndpointEnabled">optimize_endpoint_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_endpoint_enabled_input`<sup>Optional</sup> <a name="allow_endpoint_enabled_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.allowEndpointEnabledInput"></a>

```python
allow_endpoint_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_endpoint_enabled_input`<sup>Optional</sup> <a name="default_endpoint_enabled_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.defaultEndpointEnabledInput"></a>

```python
default_endpoint_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `optimize_endpoint_enabled_input`<sup>Optional</sup> <a name="optimize_endpoint_enabled_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.optimizeEndpointEnabledInput"></a>

```python
optimize_endpoint_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_endpoint_enabled`<sup>Required</sup> <a name="allow_endpoint_enabled" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.allowEndpointEnabled"></a>

```python
allow_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_endpoint_enabled`<sup>Required</sup> <a name="default_endpoint_enabled" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.defaultEndpointEnabled"></a>

```python
default_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `optimize_endpoint_enabled`<sup>Required</sup> <a name="optimize_endpoint_enabled" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.optimizeEndpointEnabled"></a>

```python
optimize_endpoint_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategoryOutputReference.property.internalValue"></a>

```python
internal_value: VpnSiteO365PolicyTrafficCategory
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteO365PolicyTrafficCategory">VpnSiteO365PolicyTrafficCategory</a>

---


### VpnSiteTimeoutsOutputReference <a name="VpnSiteTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_site

vpnSite.VpnSiteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnSite.VpnSiteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VpnSiteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.vpnSite.VpnSiteTimeouts">VpnSiteTimeouts</a>]

---



