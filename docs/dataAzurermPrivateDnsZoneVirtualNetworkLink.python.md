# `dataAzurermPrivateDnsZoneVirtualNetworkLink` Submodule <a name="`dataAzurermPrivateDnsZoneVirtualNetworkLink` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsZoneVirtualNetworkLink <a name="DataAzurermPrivateDnsZoneVirtualNetworkLink" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link azurerm_private_dns_zone_virtual_network_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_zone_virtual_network_link

dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  private_dns_zone_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#name DataAzurermPrivateDnsZoneVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.privateDnsZoneName">private_dns_zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#private_dns_zone_name DataAzurermPrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#resource_group_name DataAzurermPrivateDnsZoneVirtualNetworkLink#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#id DataAzurermPrivateDnsZoneVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#name DataAzurermPrivateDnsZoneVirtualNetworkLink#name}.

---

##### `private_dns_zone_name`<sup>Required</sup> <a name="private_dns_zone_name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.privateDnsZoneName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#private_dns_zone_name DataAzurermPrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#resource_group_name DataAzurermPrivateDnsZoneVirtualNetworkLink#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#id DataAzurermPrivateDnsZoneVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#timeouts DataAzurermPrivateDnsZoneVirtualNetworkLink#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#read DataAzurermPrivateDnsZoneVirtualNetworkLink#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermPrivateDnsZoneVirtualNetworkLink resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_zone_virtual_network_link

dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_zone_virtual_network_link

dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_zone_virtual_network_link

dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_zone_virtual_network_link

dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermPrivateDnsZoneVirtualNetworkLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermPrivateDnsZoneVirtualNetworkLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermPrivateDnsZoneVirtualNetworkLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsZoneVirtualNetworkLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.registrationEnabled">registration_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resolutionPolicy">resolution_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneNameInput">private_dns_zone_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneName">private_dns_zone_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `registration_enabled`<sup>Required</sup> <a name="registration_enabled" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.registrationEnabled"></a>

```python
registration_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `resolution_policy`<sup>Required</sup> <a name="resolution_policy" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resolutionPolicy"></a>

```python
resolution_policy: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.timeouts"></a>

```python
timeouts: DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a>

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_dns_zone_name_input`<sup>Optional</sup> <a name="private_dns_zone_name_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneNameInput"></a>

```python
private_dns_zone_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_dns_zone_name`<sup>Required</sup> <a name="private_dns_zone_name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneName"></a>

```python
private_dns_zone_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig <a name="DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_zone_virtual_network_link

dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  private_dns_zone_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#name DataAzurermPrivateDnsZoneVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneName">private_dns_zone_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#private_dns_zone_name DataAzurermPrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#resource_group_name DataAzurermPrivateDnsZoneVirtualNetworkLink#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#id DataAzurermPrivateDnsZoneVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#name DataAzurermPrivateDnsZoneVirtualNetworkLink#name}.

---

##### `private_dns_zone_name`<sup>Required</sup> <a name="private_dns_zone_name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneName"></a>

```python
private_dns_zone_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#private_dns_zone_name DataAzurermPrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#resource_group_name DataAzurermPrivateDnsZoneVirtualNetworkLink#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#id DataAzurermPrivateDnsZoneVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts"></a>

```python
timeouts: DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#timeouts DataAzurermPrivateDnsZoneVirtualNetworkLink#timeouts}

---

### DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts <a name="DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_zone_virtual_network_link

dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#read DataAzurermPrivateDnsZoneVirtualNetworkLink#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/private_dns_zone_virtual_network_link#read DataAzurermPrivateDnsZoneVirtualNetworkLink#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference <a name="DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_zone_virtual_network_link

dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---



