# `dataAzurermPrivateDnsResolverVirtualNetworkLink` Submodule <a name="`dataAzurermPrivateDnsResolverVirtualNetworkLink` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsResolverVirtualNetworkLink <a name="DataAzurermPrivateDnsResolverVirtualNetworkLink" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link azurerm_private_dns_resolver_virtual_network_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_virtual_network_link

dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_forwarding_ruleset_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.dnsForwardingRulesetId">dns_forwarding_ruleset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id DataAzurermPrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#name DataAzurermPrivateDnsResolverVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#id DataAzurermPrivateDnsResolverVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_forwarding_ruleset_id`<sup>Required</sup> <a name="dns_forwarding_ruleset_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.dnsForwardingRulesetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id DataAzurermPrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#name DataAzurermPrivateDnsResolverVirtualNetworkLink#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#id DataAzurermPrivateDnsResolverVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#timeouts DataAzurermPrivateDnsResolverVirtualNetworkLink#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#read DataAzurermPrivateDnsResolverVirtualNetworkLink#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermPrivateDnsResolverVirtualNetworkLink resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_virtual_network_link

dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_virtual_network_link

dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_virtual_network_link

dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_virtual_network_link

dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermPrivateDnsResolverVirtualNetworkLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermPrivateDnsResolverVirtualNetworkLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermPrivateDnsResolverVirtualNetworkLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsResolverVirtualNetworkLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.virtualNetworkId">virtual_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetIdInput">dns_forwarding_ruleset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetId">dns_forwarding_ruleset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.timeouts"></a>

```python
timeouts: DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference</a>

---

##### `virtual_network_id`<sup>Required</sup> <a name="virtual_network_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.virtualNetworkId"></a>

```python
virtual_network_id: str
```

- *Type:* str

---

##### `dns_forwarding_ruleset_id_input`<sup>Optional</sup> <a name="dns_forwarding_ruleset_id_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetIdInput"></a>

```python
dns_forwarding_ruleset_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a>]

---

##### `dns_forwarding_ruleset_id`<sup>Required</sup> <a name="dns_forwarding_ruleset_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.dnsForwardingRulesetId"></a>

```python
dns_forwarding_ruleset_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig <a name="DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_virtual_network_link

dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_forwarding_ruleset_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.dnsForwardingRulesetId">dns_forwarding_ruleset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id DataAzurermPrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#name DataAzurermPrivateDnsResolverVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#id DataAzurermPrivateDnsResolverVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_forwarding_ruleset_id`<sup>Required</sup> <a name="dns_forwarding_ruleset_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.dnsForwardingRulesetId"></a>

```python
dns_forwarding_ruleset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#dns_forwarding_ruleset_id DataAzurermPrivateDnsResolverVirtualNetworkLink#dns_forwarding_ruleset_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#name DataAzurermPrivateDnsResolverVirtualNetworkLink#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#id DataAzurermPrivateDnsResolverVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkConfig.property.timeouts"></a>

```python
timeouts: DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#timeouts DataAzurermPrivateDnsResolverVirtualNetworkLink#timeouts}

---

### DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts <a name="DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_virtual_network_link

dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#read DataAzurermPrivateDnsResolverVirtualNetworkLink#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/private_dns_resolver_virtual_network_link#read DataAzurermPrivateDnsResolverVirtualNetworkLink#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference <a name="DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_virtual_network_link

dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverVirtualNetworkLink.DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsResolverVirtualNetworkLinkTimeouts</a>]

---



