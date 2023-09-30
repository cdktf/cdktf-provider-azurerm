# `azurerm_private_dns_zone_virtual_network_link`

Refer to the Terraform Registory for docs: [`azurerm_private_dns_zone_virtual_network_link`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link).

# `privateDnsZoneVirtualNetworkLink` Submodule <a name="`privateDnsZoneVirtualNetworkLink` Submodule" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsZoneVirtualNetworkLink <a name="PrivateDnsZoneVirtualNetworkLink" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link azurerm_private_dns_zone_virtual_network_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone_virtual_network_link

privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink(
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
  private_dns_zone_name: str,
  resource_group_name: str,
  virtual_network_id: str,
  id: str = None,
  registration_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: PrivateDnsZoneVirtualNetworkLinkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#name PrivateDnsZoneVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.privateDnsZoneName">private_dns_zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#private_dns_zone_name PrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#resource_group_name PrivateDnsZoneVirtualNetworkLink#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#virtual_network_id PrivateDnsZoneVirtualNetworkLink#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#id PrivateDnsZoneVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.registrationEnabled">registration_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#registration_enabled PrivateDnsZoneVirtualNetworkLink#registration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#tags PrivateDnsZoneVirtualNetworkLink#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#name PrivateDnsZoneVirtualNetworkLink#name}.

---

##### `private_dns_zone_name`<sup>Required</sup> <a name="private_dns_zone_name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.privateDnsZoneName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#private_dns_zone_name PrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#resource_group_name PrivateDnsZoneVirtualNetworkLink#resource_group_name}.

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.virtualNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#virtual_network_id PrivateDnsZoneVirtualNetworkLink#virtual_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#id PrivateDnsZoneVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registration_enabled`<sup>Optional</sup> <a name="registration_enabled" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.registrationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#registration_enabled PrivateDnsZoneVirtualNetworkLink#registration_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#tags PrivateDnsZoneVirtualNetworkLink#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#timeouts PrivateDnsZoneVirtualNetworkLink#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetRegistrationEnabled">reset_registration_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#create PrivateDnsZoneVirtualNetworkLink#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#delete PrivateDnsZoneVirtualNetworkLink#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#read PrivateDnsZoneVirtualNetworkLink#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#update PrivateDnsZoneVirtualNetworkLink#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_registration_enabled` <a name="reset_registration_enabled" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetRegistrationEnabled"></a>

```python
def reset_registration_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone_virtual_network_link

privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone_virtual_network_link

privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone_virtual_network_link

privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneNameInput">private_dns_zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabledInput">registration_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkIdInput">virtual_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneName">private_dns_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabled">registration_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeouts"></a>

```python
timeouts: PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_dns_zone_name_input`<sup>Optional</sup> <a name="private_dns_zone_name_input" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneNameInput"></a>

```python
private_dns_zone_name_input: str
```

- *Type:* str

---

##### `registration_enabled_input`<sup>Optional</sup> <a name="registration_enabled_input" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabledInput"></a>

```python
registration_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PrivateDnsZoneVirtualNetworkLinkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>]

---

##### `virtual_network_id_input`<sup>Optional</sup> <a name="virtual_network_id_input" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkIdInput"></a>

```python
virtual_network_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_dns_zone_name`<sup>Required</sup> <a name="private_dns_zone_name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneName"></a>

```python
private_dns_zone_name: str
```

- *Type:* str

---

##### `registration_enabled`<sup>Required</sup> <a name="registration_enabled" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.registrationEnabled"></a>

```python
registration_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsZoneVirtualNetworkLinkConfig <a name="PrivateDnsZoneVirtualNetworkLinkConfig" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone_virtual_network_link

privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  private_dns_zone_name: str,
  resource_group_name: str,
  virtual_network_id: str,
  id: str = None,
  registration_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: PrivateDnsZoneVirtualNetworkLinkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#name PrivateDnsZoneVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneName">private_dns_zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#private_dns_zone_name PrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#resource_group_name PrivateDnsZoneVirtualNetworkLink#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#virtual_network_id PrivateDnsZoneVirtualNetworkLink#virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#id PrivateDnsZoneVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.registrationEnabled">registration_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#registration_enabled PrivateDnsZoneVirtualNetworkLink#registration_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#tags PrivateDnsZoneVirtualNetworkLink#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#name PrivateDnsZoneVirtualNetworkLink#name}.

---

##### `private_dns_zone_name`<sup>Required</sup> <a name="private_dns_zone_name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneName"></a>

```python
private_dns_zone_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#private_dns_zone_name PrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#resource_group_name PrivateDnsZoneVirtualNetworkLink#resource_group_name}.

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#virtual_network_id PrivateDnsZoneVirtualNetworkLink#virtual_network_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#id PrivateDnsZoneVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registration_enabled`<sup>Optional</sup> <a name="registration_enabled" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.registrationEnabled"></a>

```python
registration_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#registration_enabled PrivateDnsZoneVirtualNetworkLink#registration_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#tags PrivateDnsZoneVirtualNetworkLink#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts"></a>

```python
timeouts: PrivateDnsZoneVirtualNetworkLinkTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#timeouts PrivateDnsZoneVirtualNetworkLink#timeouts}

---

### PrivateDnsZoneVirtualNetworkLinkTimeouts <a name="PrivateDnsZoneVirtualNetworkLinkTimeouts" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone_virtual_network_link

privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#create PrivateDnsZoneVirtualNetworkLink#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#delete PrivateDnsZoneVirtualNetworkLink#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#read PrivateDnsZoneVirtualNetworkLink#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#update PrivateDnsZoneVirtualNetworkLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#create PrivateDnsZoneVirtualNetworkLink#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#delete PrivateDnsZoneVirtualNetworkLink#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#read PrivateDnsZoneVirtualNetworkLink#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/private_dns_zone_virtual_network_link#update PrivateDnsZoneVirtualNetworkLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference <a name="PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_zone_virtual_network_link

privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrivateDnsZoneVirtualNetworkLinkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.privateDnsZoneVirtualNetworkLink.PrivateDnsZoneVirtualNetworkLinkTimeouts">PrivateDnsZoneVirtualNetworkLinkTimeouts</a>]

---



